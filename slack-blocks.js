// Block Constants Used For Each Scenario

const defaultBlocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Houston HQ*"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "Select Building"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Shifts starting on April 27"
    },
    "accessory": {
      "type": "datepicker",
      "action_id": "datepicker123",
      "initial_date": "2020-04-27",
      "placeholder": {
        "type": "plain_text",
        "text": "Select Date"
      }
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Monday, April 27 - 9:00am - 5:00pm*\n*People*: @ryang, @jdelgado, @along, and 27 others\n*Categories*: Sales, Product, Engineering, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Tuesday, April 28 - 8:00am - 4:00pm*\n*People*: @kevinbacon, @jason, @angela, and 22 others\n*Categories*: Accounting, Marketing, Customer Support, and 3 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Wednesday, April 29 - 9:00am - 5:00pm*\n*People*: @ryang, @jdelgado, @along, and 27 others\n*Categories*: Sales, Product, Engineering, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Thursday, April 30 - 8:00am - 4:00pm*\n*People*: @kevindurant, @jason, @angela, and 22 others\n*Categories*: Accounting, Marketing, Customer Support, and 3 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Friday, May 1 - 9:00am - 5:00pm*\n*People*: @ryang, @jdelgado, @along, and 27 others\n*Categories*: Sales, Product, Engineering, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*<fakelink.ToMoreShifts.com|Show more shifts>*"
    }
  }
];

const meBlocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Your Schedule*"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Shifts starting on April 27"
    },
    "accessory": {
      "type": "datepicker",
      "action_id": "datepicker123",
      "initial_date": "2020-04-27",
      "placeholder": {
        "type": "plain_text",
        "text": "Select Date"
      }
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Monday, April 27 - 9:00am - 5:00pm*\n*Building*: Houston HQ\n*People*: You, @jdelgado, @along, and 27 others\n*Categories*: Sales, Product, Engineering, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Wednesday, April 29 - 9:00am - 5:00pm*\n*Building*: Houston HQ\n*People*: You, @jdelgado, @along, and 27 others\n*Categories*: Sales, Product, Engineering, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Friday, May 1 - 9:00am - 5:00pm*\n*Building*: Houston HQ\n*People*: You, @jdelgado, @along, and 27 others\n*Categories*: Sales, Product, Engineering, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Tuesday, May 5 - 10:00am - 6:00pm*\n*Building*: Austin Office\n*People*: You, @nickcage, @kevinmccallister, and 27 others\n*Categories*: Operations, Finance, Guild of Acting, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Thursday, May 7 - 10:00am - 6:00pm*\n*Building*: Austin Office\n*People*: You, @nickcage, @kevinmccallister, and 27 others\n*Categories*: Operations, Finance, Guild of Acting, and 5 others"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "View"
      },
      "value": "click_me_123"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*<fakelink.ToMoreShifts.com|Show more shifts>*"
    }
  }
];

const mondayView = {
  "type": "modal",
  "title": {
    "type": "plain_text",
    "text": "iOFFICE Scheduler",
    "emoji": true
  },
  "submit": {
    "type": "plain_text",
    "text": "Submit",
    "emoji": true
  },
  "close": {
    "type": "plain_text",
    "text": "Cancel",
    "emoji": true
  },
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Monday, April 27 - 9:00am - 5:00pm*"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "input",
      "block_id": "input123",
      "label": {
        "type": "plain_text",
        "text": "People Search"
      },
      "element": {
        "type": "plain_text_input",
        "action_id": "plain_input",
        "placeholder": {
          "type": "plain_text",
          "text": "Search for people by name, email, category, or status"
        }
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Austin Long* (@along)\nEngineering\nBack-End Engineer\n*<fakelink.ToMoreShifts.com|More info>*"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": "Remove"
        },
        "style": "danger",
        "value": "click_me_123"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Juan Delgado* (@jdelgado)\nExternal Consultant\nSpiritual Advisor\n*<fakelink.ToMoreShifts.com|More info>*"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": "Remove"
        },
        "style": "danger",
        "value": "click_me_123"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Ray Yang* (@ryang)\nOrnithology, Culinary Support\nHummingbird Expert, Donut Taster\n*<fakelink.ToMoreShifts.com|More info>*"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": "Remove"
        },
        "style": "danger",
        "value": "click_me_123"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Add All"
          },
          "style": "primary",
          "value": "click_me_123"
        },
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Remove All"
          },
          "style": "danger",
          "value": "click_me_123"
        }
      ]
    }
  ]
};

const ornithologyView = {
  "type": "modal",
  "title": {
    "type": "plain_text",
    "text": "iOFFICE Scheduler",
    "emoji": true
  },
  "submit": {
    "type": "plain_text",
    "text": "Submit",
    "emoji": true
  },
  "close": {
    "type": "plain_text",
    "text": "Cancel",
    "emoji": true
  },
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Monday, April 27 - 9:00am - 5:00pm*"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "input",
      "block_id": "input123",
      "label": {
        "type": "plain_text",
        "text": "People Search"
      },
      "element": {
        "type": "plain_text_input",
        "action_id": "plain_input",
        "placeholder": {
          "type": "plain_text",
          "text": "Search for people by name, email, category, or status"
        }
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*James Bond* (@bondjamesbond)\nMI6, Ornithology\nBird Watcher\n*<fakelink.ToMoreShifts.com|More info>*"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": "Add"
        },
        "style": "primary",
        "value": "click_me_123"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Ray Yang* (@ryang)\nOrnithology, Culinary Support\nHummingbird Expert, Donut Taster\n*<fakelink.ToMoreShifts.com|More info>*"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": "Remove"
        },
        "style": "danger",
        "value": "click_me_123"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Add All"
          },
          "style": "primary",
          "value": "click_me_123"
        },
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Remove All"
          },
          "style": "danger",
          "value": "click_me_123"
        }
      ]
    }
  ]
};

const infoView = {
  "type": "modal",
  "title": {
    "type": "plain_text",
    "text": "Ray Yang",
    "emoji": true
  },
  "close": {
    "type": "plain_text",
    "text": "Back",
    "emoji": true
  },
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Hummingbird Expert, Donut Taster*"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*Email:*\nryang@corp.ioffice.systems"
        },
        {
          "type": "mrkdwn",
          "text": "*Username:*\nryang"
        },
        {
          "type": "mrkdwn",
          "text": "*Status:*\nAvailable"
        },
        {
          "type": "mrkdwn",
          "text": "*Essential:*\nOf course"
        },
        {
          "type": "mrkdwn",
          "text": "*Category:*\nOrnithology, Culinary Support"
        },
        {
          "type": "mrkdwn",
          "text": "*Space:*\nRemote"
        },
        {
          "type": "mrkdwn",
          "text": "*Notes:*\nHates Mondays"
        }
      ]
    }
  ]
};

const ptoBlocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "You have a new request:\n*<google.com|Juan Delgado - Time Off Request>*"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Type:*\nPaid Time Off\n*When:*\nApril 27 - April 29\n*Hours:* 24.0 (3 days)\n*Remaining balance:* 80.0 hours (10 days)\n*Comments:* \"Family in town, going camping!\""
    }
  },
  {
    "type": "actions",
    "elements": [
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": "Approve"
        },
        "style": "primary",
        "value": "click_me_123"
      },
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": "Deny"
        },
        "style": "danger",
        "value": "click_me_123"
      }
    ]
  }
];

module.exports = {
  defaultBlocks,
  infoView,
  meBlocks,
  mondayView,
  ornithologyView,
  ptoBlocks,
};
