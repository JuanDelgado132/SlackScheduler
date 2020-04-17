const router = require('express').Router();
const firebase = require('./firebase');
const config = require('./config');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

const blocks = require('./slack-blocks');

router.post('/', async (req, res) => {
  console.log('inside post');
  await slackValidation(res, req.body.challenge, req.body.text);
  const data = parseSlashCommand(req);
  const resUrl = data.response_url;
  const resBody = data.resBody;
  await slackPost(resUrl, resBody);
});

const slackValidation = async (res, challenge, text) => {
  const responseText = `/schedule ${text}`;
  res.send({
    challenge,
    text: responseText,
  });
};

const parseSlashCommand = (req) => {
  const { channel_id, response_url, text, token, user_id, user_name } = req.body;
  const data = {
    channel_id,
    response_url,
    text,
    token,
    user_id,
    user_name,
  };

  if (user_id !== 'UHRH28QRG') {
    data['command'] = 'error_permissions';
    return data;
  }

  if (!text) {
    data['command'] = 'default';
    return data;
  }

  if (text.includes('me')) {
    data['command'] = 'me';
  } else if (text.includes('4/27/20')) {
    data['command'] = 'monday';
  } else if (text.includes('ornithology')) {
    data['command'] = 'ornithology';
  } else if (text.includes('info')) {
    data['command'] = 'info';
  } else if (text.includes('pto')) {
    data['command'] = 'pto';
  }
  data['resBody'] = createResBody(data);
  return data;
};

const createResBody = (data) => {
  let blocks;
  let view;
  if (data.command === 'default') {
    blocks = blocks.defaultBlocks;
  } else if (data.command === 'me') {
    blocks = blocks.meBlocks;
  } else if (data.command === 'monday') {
    view = blocks.mondayView;
  } else if (data.command === 'ornithology') {
    view = blocks.ornithologyView;
  } else if (data.command === 'info') {
    view = blocks.infoView;
  } else if (data.command === 'pto') {
    blocks = blocks.ptoBlocks;
  }
  const resBody = {
    channel: data.channel_id,
    response_type: 'ephemeral',
    user: data.command !== 'pto' ? data.user_id : 'UHRH28QRG',
  };
  blocks ? resBody['blocks'] = blocks : resBody['view'] = view;
  return resBody;
};

const slackPost = async (resUrl, resBody, test = false) => {
  const token = test ? config.slack.test_token : config.slack.oauth_token;
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(resBody),
  };

  try {
    await fetch(resUrl, options);
  } catch (error) {
    console.error(error);
  }
};

module.exports = router;
