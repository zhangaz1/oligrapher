export const simpleGraph = {
  "nodes": {
    "-1Xu2uphP": {
      "id": "-1Xu2uphP",
      "display": {
        "x": -54.71783295711061,
        "y": -84.81264108352144,
        "scale": 1,
        "status": "normal",
        "name": "test1",
        "color": "#ccc"
      }
    },
    "L1K0sAKPx": {
      "id": "L1K0sAKPx",
      "display": {
        "x": 157.29119638826188,
        "y": -86.60948081264108,
        "scale": 1,
        "status": "normal",
        "name": "test2",
        "color": "#ccc"
      }
    },
    "_8bFKhgma": {
      "id": "_8bFKhgma",
      "display": {
        "x": 55.68397291196388,
        "y": 19.02708803611738,
        "scale": 1,
        "status": "normal",
        "name": "test3"
      }
    }
  },
  "edges": {
    "EW7LJH8ml": {
      "id": "EW7LJH8ml",
      "display": {
        "scale": 1,
        "arrow": false,
        "status": "normal",
        "label": "edgeA",
        "x1": 157.29119638826188,
        "y1": -86.60948081264108,
        "x2": -54.71783295711061,
        "y2": -84.81264108352144,
        "s1": 1,
        "s2": 1
      },
      "node1_id": "L1K0sAKPx",
      "node2_id": "-1Xu2uphP"
    },
    "WRIkscvlf": {
      "id": "WRIkscvlf",
      "display": {
        "scale": 1,
        "arrow": false,
        "status": "normal",
        "label": "edgeB",
        "x1": 157.29119638826188,
        "y1": -86.60948081264108,
        "x2": 55.68397291196388,
        "y2": 19.02708803611738,
        "s1": 1,
        "s2": 1,
        "cx": 63.78273137697517,
        "cy": 59.28216704288939
      },
      "node1_id": "L1K0sAKPx",
      "node2_id": "_8bFKhgma"
    }
  },
  "captions": {}
}

export const houseOfRepresentatives = {
  "type": "entities",
  "id": 12884,
  "attributes": {
    "id": 12884,
    "name": "US House of Representatives",
    "blurb": null,
    "summary": null,
    "website": null,
    "parent_id": 84060,
    "primary_ext": "Org",
    "updated_at": "2019-07-01T15:33:13Z",
    "start_date": null,
    "end_date": null,
    "relationship_id": 30434,
    "relationship_category_id": 7,
    "aliases": [
      "HOUSE OF REPRESENTATIVES",
      "US House of Representatives"
    ],
    "types": [
      "Organization",
      "Government Body"
    ],
    "extensions": {
      "Org": {
        "name": "US House of Representatives",
        "name_nick": null,
        "employees": null,
        "revenue": null,
        "fedspending_id": null,
        "lda_registrant_id": null
      },
      "GovernmentBody": {
        "is_federal": null,
        "state_id": null,
        "city": null,
        "county": null
      }
    }
  },
  "links": {
    "self": "http://localhost:8080/entities/12884-US_House_of_Representatives"
  }
}

export const lobbyingRelationship = {
  "type": "relationships",
  "id": 30434,
  "attributes": {
    "id": 30434,
    "entity1_id": 2,
    "entity2_id": 12884,
    "category_id": 7,
    "description1": "Direct Lobbying",
    "description2": "Direct Lobbying",
    "amount": null,
    "goods": null,
    "filings": 22,
    "updated_at": "2008-11-10T22:46:48Z",
    "start_date": "1999-00-00",
    "end_date": "2008-00-00",
    "is_current": null,
    "description": "ExxonMobil  lobbies/lobbied  US House of Representatives"
  },
  "links": {
    "self": "http://localhost:8080/relationships/30434"
  }
}

export const bigGraph = {
  "nodes": {
    "15114": {
      "id": "15114",
      "display": {
        "x": -127.88049209138843,
        "y": -37.51845342706503,
        "scale": 1,
        "name": "University of Chicago",
        "url": "https://littlesis.org/org/15114-University_of_Chicago",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "15122": {
      "id": "15122",
      "display": {
        "x": -323.4024181349526,
        "y": -80.54504459941644,
        "scale": 1.5,
        "name": "David Rubenstein",
        "url": "https://littlesis.org/person/15122/David_Rubenstein",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "21689": {
      "id": "21689",
      "display": {
        "x": -119.22671353251323,
        "y": -148.97715289982423,
        "scale": 1,
        "name": "Smithsonian Institution",
        "url": "https://littlesis.org/org/21689-Smithsonian_Institution",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "28657": {
      "id": "28657",
      "display": {
        "x": -179.18277680140602,
        "y": -252.45694200351494,
        "scale": 1,
        "name": "National Gallery of Art",
        "url": "https://littlesis.org/org/28657-National_Gallery_of_Art",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "33586": {
      "id": "33586",
      "display": {
        "x": -464.8546503679344,
        "y": 53.76652021844583,
        "scale": 2,
        "name": "Carlyle Group",
        "url": "https://littlesis.org/org/33586/Carlyle_Group",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "34926": {
      "id": "34926",
      "display": {
        "x": -313.4165202108963,
        "y": -290.36555360281193,
        "scale": 1,
        "name": "Lincoln Center for the Performing Arts",
        "image": "data:image/png;base64,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",
        "url": "https://littlesis.org/org/34926-Lincoln_Center_for_the_Performing_Arts",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "37225": {
      "id": "37225",
      "display": {
        "x": 210.51669595782067,
        "y": -15.286467486818978,
        "scale": 1,
        "name": "Whitney Museum of American Art",
        "image": "https://dfl6orqdcqt4f.cloudfront.net/images/profile/beebfe4f5ba667bf637bb0ae2a2c7e43b0db322d_1354463901.png",
        "url": "https://littlesis.org/org/37225-Whitney_Museum_of_American_Art",
        "status": "normal"
      }
    },
    "38938": {
      "id": "38938",
      "display": {
        "x": -504.9384885764499,
        "y": -284.7521968365554,
        "scale": 1,
        "name": "John F Kennedy Center for the Performing Arts",
        "image": "https://dfl6orqdcqt4f.cloudfront.net/images/profile/0aa87f5d3c53d0418d1d6426aedd7ba9bd12c030_1246972526.png",
        "url": "https://littlesis.org/org/38938-John_F_Kennedy_Center_for_the_Performing_Arts",
        "status": "normal"
      }
    },
    "71359": {
      "id": "71359",
      "display": {
        "x": 32.1503108951454,
        "y": -43.87678000240193,
        "scale": 1.5,
        "name": "Warren B Kanders",
        "url": "https://littlesis.org/person/71359/Warren_B_Kanders",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "74541": {
      "id": "74541",
      "display": {
        "name": "Combined Systems",
        "x": -311.01857898692043,
        "y": 162.3706066386352,
        "scale": 2,
        "image": "https://littlesis.org/images/profile/0e875f98f387eb9f887fdd8a506ea4be42a33e11_1296334029.png",
        "url": "https://littlesis.org/org/74541/Combined_Systems",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "87008": {
      "id": "87008",
      "display": {
        "x": 16.46703387899009,
        "y": 146.22192577653695,
        "scale": 2,
        "name": "Safariland",
        "url": "https://littlesis.org/org/87008/Safariland",
        "color": "#000000",
        "status": "normal"
      }
    },
    "186939": {
      "id": "186939",
      "display": {
        "x": 120.36028119507905,
        "y": -172.05799648506155,
        "scale": 1,
        "name": "Allison Kanders",
        "url": "https://littlesis.org/person/186939-Allison_Kanders",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "226193": {
      "id": "226193",
      "display": {
        "x": 264.89279437609844,
        "y": -166.66256590509664,
        "scale": 1,
        "name": "Aspen Music Festival and School",
        "url": "https://littlesis.org/org/226193-Aspen_Music_Festival_and_School",
        "color": "#ccc",
        "status": "normal"
      }
    },
    "x1": {
      "id": "x1",
      "display": {
        "x": -150.98345974543608,
        "y": 450.0964043901405,
        "scale": 1,
        "name": "Egypt",
        "color": "#000000",
        "url": "https://littlesis.org/org/74541/Combined_Systems",
        "status": "normal"
      }
    },
    "x2": {
      "id": "x2",
      "display": {
        "x": -149.38059894159218,
        "y": 363.5221053307796,
        "scale": 1,
        "name": "Palestine ",
        "color": "#000000",
        "url": "https://littlesis.org/org/74541/Combined_Systems",
        "status": "normal"
      }
    },
    "x3": {
      "id": "x3",
      "display": {
        "x": -145.21592048677672,
        "y": 278.27380873087156,
        "scale": 1,
        "name": "Ferguson, MO",
        "color": "#000000",
        "url": "https://littlesis.org/org/87008/Safariland",
        "status": "normal"
      }
    },
    "x11": {
      "id": "x11",
      "display": {
        "x": 169.49985779149384,
        "y": 314.9498156915079,
        "scale": 1,
        "name": "Oakland",
        "url": "https://littlesis.org/org/87008/Safariland",
        "color": "#000000",
        "status": "normal"
      }
    },
    "SOcyEJvRv": {
      "id": "SOcyEJvRv",
      "display": {
        "x": 310.2601054481546,
        "y": 153.20210896309317,
        "scale": 1.5,
        "name": "Tijuana border",
        "color": "#000000",
        "url": "https://littlesis.org/person/15122/David_Rubenstein",
        "status": "normal"
      }
    },
    "eH4UiaI0G": {
      "id": "eH4UiaI0G",
      "display": {
        "x": 240.26055690814397,
        "y": 266.7308814756292,
        "scale": 1,
        "name": "Venezuela",
        "color": "#000000",
        "status": "normal"
      }
    },
    "KOBTd3z1B": {
      "id": "KOBTd3z1B",
      "display": {
        "x": 94.86238532110093,
        "y": 343.22935779816515,
        "scale": 1,
        "name": "San Juan",
        "color": "#000000",
        "url": "https://littlesis.org/org/87008/Safariland",
        "status": "normal"
      }
    }
  },
  "edges": {
    "91168": {
      "id": "91168",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "Co-founder",
        "cx": -27.424993041930446,
        "cy": -28.90145065408806,
        "dash": false,
        "url": "https://littlesis.org/relationship/view/id/91168",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -464.8546503679344,
        "y2": 53.76652021844583,
        "s1": 1.5,
        "s2": 2,
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "33586",
      "cx": -36.438080860450036,
      "cy": -16.114910997828233
    },
    "121691": {
      "id": "121691",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "label": "Chairman",
        "dash": false,
        "url": "https://littlesis.org/relationships/121691",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -504.9384885764499,
        "y2": -284.7521968365554,
        "s1": 1.5,
        "s2": 1,
        "cx": -62.271627573682814,
        "cy": 55.35823033561126,
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "38938",
      "cx": -64.43723909505589,
      "cy": 52.821695205404424
    },
    "128609": {
      "id": "128609",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "label": "Member, Board of Trustees",
        "dash": false,
        "url": "https://littlesis.org/relationships/128609",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -127.88049209138843,
        "y2": -37.51845342706503,
        "s1": 1.5,
        "s2": 1,
        "cx": 12.159688701726651,
        "cy": -23.578989518958245,
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "15114",
      "cx": 18.152066340720324,
      "cy": -19.34759064121757
    },
    "227015": {
      "id": "227015",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "label": "Donation · $10,000,000",
        "dash": true,
        "url": "https://littlesis.org/relationships/227015",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -313.4165202108963,
        "y2": -290.36555360281193,
        "s1": 1.5,
        "s2": 1,
        "cx": -101.58415336942886,
        "cy": -4.834651250571408,
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "34926",
      "cx": -100.80702086499124,
      "cy": -13.440930504377892
    },
    "227022": {
      "id": "227022",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "label": "Board of Regents",
        "dash": false,
        "url": "https://littlesis.org/relationships/227022",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -119.22671353251323,
        "y2": -148.97715289982423,
        "s1": 1.5,
        "s2": 1,
        "cx": 3.812680436383598,
        "cy": -30.812412413365703,
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "21689",
      "cx": 8.192431322002854,
      "cy": -29.947042589804784
    },
    "231425": {
      "id": "231425",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "label": "Vice Chairman",
        "dash": false,
        "url": "https://littlesis.org/relationships/231425",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -313.4165202108963,
        "y2": -290.36555360281193,
        "s1": 1.5,
        "s2": 1,
        "cx": -101.58415336942886,
        "cy": -4.834651250571408,
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "34926",
      "cx": -100.80702086499124,
      "cy": -13.440930504377892
    },
    "293533": {
      "id": "293533",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "Board Member",
        "dash": false,
        "url": "https://littlesis.org/relationships/293533",
        "x1": 32.1503108951454,
        "y1": -43.87678000240193,
        "x2": 210.51669595782067,
        "y2": -15.286467486818978,
        "s1": 1.5,
        "s2": 1,
        "cx": 8.299225195426121,
        "cy": -53.86693900765264,
        "status": "normal"
      },
      "node1_id": "71359",
      "node2_id": "37225",
      "cx": 20.705759279888976,
      "cy": -50.41622545909062
    },
    "819218": {
      "id": "819218",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "Owner, Chairman & CEO",
        "cx": -39.374427423185644,
        "cy": -12.718894321232133,
        "dash": false,
        "url": "https://littlesis.org/relationship/view/id/819218",
        "x1": 32.1503108951454,
        "y1": -43.87678000240193,
        "x2": 16.46703387899009,
        "y2": 146.22192577653695,
        "s1": 1.5,
        "s2": 2,
        "status": "normal"
      },
      "node1_id": "71359",
      "node2_id": "87008",
      "cx": -39.33910780988136,
      "cy": -12.827720155230853
    },
    "819299": {
      "id": "819299",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "Owner",
        "dash": false,
        "url": "https://littlesis.org/relationship/view/id/819299",
        "x1": -464.8546503679344,
        "y1": 53.76652021844583,
        "x2": -311.01857898692043,
        "y2": 162.3706066386352,
        "s1": 2,
        "s2": 2,
        "cx": 8.792243064846827,
        "cy": -38.32366537367153,
        "status": "normal"
      },
      "node1_id": "33586",
      "node2_id": "74541",
      "cx": 7.134945965690116,
      "cy": -38.666515382837126
    },
    "914657": {
      "id": "914657",
      "display": {
        "scale": 1,
        "arrow": false,
        "label": "partner",
        "dash": false,
        "url": "https://littlesis.org/relationships/914657",
        "x1": 32.1503108951454,
        "y1": -43.87678000240193,
        "x2": 120.36028119507905,
        "y2": -172.05799648506155,
        "s1": 1.5,
        "s2": 1,
        "cx": 28.840624915887375,
        "cy": 14.081716670157181,
        "status": "normal"
      },
      "node1_id": "71359",
      "node2_id": "186939",
      "cx": 27.712181143888362,
      "cy": 16.1898550384432
    },
    "1110895": {
      "id": "1110895",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "label": "Member, Board of Trustees",
        "dash": false,
        "url": "https://littlesis.org/relationships/1110895",
        "x1": 120.36028119507905,
        "y1": -172.05799648506155,
        "x2": 264.89279437609844,
        "y2": -166.66256590509664,
        "s1": 1,
        "s2": 1,
        "cx": -5.375076004308787,
        "cy": -41.58099931279615,
        "status": "normal"
      },
      "node1_id": "186939",
      "node2_id": "226193",
      "cx": -2.0491149305788214,
      "cy": -41.87686800495148
    },
    "1315002": {
      "id": "1315002",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "dash": false,
        "url": "https://littlesis.org/relationships/1315002",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -504.9384885764499,
        "y2": -284.7521968365554,
        "s1": 1.5,
        "s2": 1,
        "cx": -62.271627573682814,
        "cy": 55.35823033561126,
        "label": "chairman",
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "38938",
      "cx": -64.43723909505589,
      "cy": 52.821695205404424
    },
    "1383011": {
      "id": "1383011",
      "display": {
        "scale": 1,
        "arrow": "1->2",
        "label": "Trustee",
        "dash": false,
        "url": "https://littlesis.org/relationships/1383011",
        "x1": -323.4024181349526,
        "y1": -80.54504459941644,
        "x2": -179.18277680140602,
        "y2": -252.45694200351494,
        "s1": 1.5,
        "s2": 1,
        "cx": -16.070695201145504,
        "cy": -20.237577492469278,
        "status": "normal"
      },
      "node1_id": "15122",
      "node2_id": "28657",
      "cx": -14.57017031994705,
      "cy": -21.343310986338423
    },
    "x2": {
      "id": "x2",
      "display": {
        "scale": 1.5,
        "arrow": false,
        "label": "Tear gas used",
        "url": "https://littlesis.org/relationship/view/id/819315",
        "x1": -311.01857898692043,
        "y1": 162.3706066386352,
        "x2": -150.98345974543608,
        "y2": 450.0964043901405,
        "s1": 2,
        "s2": 1,
        "cx": -114.46830912387924,
        "cy": 39.062748566105235,
        "status": "normal"
      },
      "node1_id": "74541",
      "node2_id": "x1",
      "cx": -115.7994563628264,
      "cy": 34.91959371602991
    },
    "x3": {
      "id": "x3",
      "display": {
        "scale": 1.5,
        "arrow": false,
        "label": "Tear gas used",
        "url": "https://littlesis.org/relationship/view/id/819315",
        "x1": -311.01857898692043,
        "y1": 162.3706066386352,
        "x2": -149.38059894159218,
        "y2": 363.5221053307796,
        "s1": 2,
        "s2": 1,
        "cx": -56.99787602807654,
        "cy": 64.34950238016985,
        "status": "normal"
      },
      "node1_id": "74541",
      "node2_id": "x2",
      "cx": -59.463583328121175,
      "cy": 62.07816513128475
    },
    "x4": {
      "id": "x4",
      "display": {
        "scale": 1.5,
        "arrow": false,
        "label": "Tear gas used",
        "dash": false,
        "url": "https://littlesis.org/relationship/view/id/819315",
        "x1": -311.01857898692043,
        "y1": 162.3706066386352,
        "x2": -145.21592048677672,
        "y2": 278.27380873087156,
        "s1": 2,
        "s2": 1,
        "cx": -25.38628860892241,
        "cy": 57.53275876918979,
        "status": "normal"
      },
      "node1_id": "74541",
      "node2_id": "x3",
      "cx": -27.165473949789593,
      "cy": 56.714363313120174
    },
    "x10": {
      "id": "x10",
      "display": {
        "scale": 1.5,
        "arrow": false,
        "label": "Tear gas used",
        "cx": 47.34566206372979,
        "cy": 44.29436502782809,
        "dash": false,
        "url": "https://littlesis.org/relationship/view/id/819315",
        "x1": 16.46703387899009,
        "y1": 146.22192577653695,
        "x2": -145.21592048677672,
        "y2": 278.27380873087156,
        "s1": 2,
        "s2": 1,
        "status": "normal"
      },
      "node1_id": "87008",
      "node2_id": "x3",
      "cx": 45.23380496510915,
      "cy": 46.44895453990164
    },
    "x16": {
      "id": "x16",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "Tear gas used during Occupy protest",
        "url": "https://littlesis.org/relationship/view/id/819418",
        "x1": 16.46703387899009,
        "y1": 146.22192577653695,
        "x2": 169.49985779149384,
        "y2": 314.9498156915079,
        "s1": 2,
        "s2": 1,
        "cx": 27.210701719829473,
        "cy": -24.679562619581187,
        "status": "normal"
      },
      "node1_id": "87008",
      "node2_id": "x11",
      "cx": 27.826844548676327,
      "cy": -23.982698381190602
    },
    "aJQDmEM5m": {
      "id": "aJQDmEM5m",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "used against migrant caravan 2018",
        "x1": 16.46703387899009,
        "y1": 146.22192577653695,
        "x2": 310.2601054481546,
        "y2": 153.20210896309317,
        "s1": 2,
        "s2": 1.5,
        "cx": 14.801314523103366,
        "cy": -2.4303092592639977,
        "status": "normal"
      },
      "node1_id": "87008",
      "node2_id": "SOcyEJvRv",
      "cx": 14.9222206691699,
      "cy": -1.5207383101946315
    },
    "2qtBaw_fd": {
      "id": "2qtBaw_fd",
      "display": {
        "scale": 1.5,
        "arrow": false,
        "label": "Tear gas used",
        "x1": 16.46703387899009,
        "y1": 146.22192577653695,
        "x2": -149.38059894159218,
        "y2": 363.5221053307796,
        "s1": 2,
        "s2": 1,
        "cx": 90.41636431660235,
        "cy": 84.31318966568439,
        "status": "normal"
      },
      "node1_id": "87008",
      "node2_id": "x2",
      "cx": 88.20877992226761,
      "cy": 86.62011332513478
    },
    "VnaMYFfYi": {
      "id": "VnaMYFfYi",
      "display": {
        "scale": 1.5,
        "arrow": false,
        "label": "Tear gas used",
        "x1": 16.46703387899009,
        "y1": 146.22192577653695,
        "x2": -150.98345974543608,
        "y2": 450.0964043901405,
        "s1": 2,
        "s2": 1,
        "cx": 144.66432287187,
        "cy": 75.74979419304601,
        "status": "normal"
      },
      "node1_id": "87008",
      "node2_id": "x1",
      "cx": 143.52209473138092,
      "cy": 77.89227147915257
    },
    "_ebsu1Ja7": {
      "id": "_ebsu1Ja7",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "Tear gas used",
        "x1": 16.46703387899009,
        "y1": 146.22192577653695,
        "x2": 240.26055690814397,
        "y2": 266.7308814756292,
        "s1": 2,
        "s2": 1,
        "cx": 26.70039321645001,
        "cy": -49.58448962991121,
        "status": "normal"
      },
      "node1_id": "87008",
      "node2_id": "eH4UiaI0G",
      "cx": 27.94412608971788,
      "cy": -48.89435986751203
    },
    "TuV4PLzUi": {
      "id": "TuV4PLzUi",
      "display": {
        "scale": 1.5,
        "arrow": "1->2",
        "label": "Tear gas used against Rosselló protesters",
        "x1": 16.46703387899009,
        "y1": 146.22192577653695,
        "x2": 94.86238532110093,
        "y2": 343.22935779816515,
        "s1": 2,
        "s2": 1,
        "status": "normal"
      },
      "node1_id": "87008",
      "node2_id": "KOBTd3z1B"
    }
  },
  "captions": {},
  "id": "3638"
}