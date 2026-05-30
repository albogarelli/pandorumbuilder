// Pandorum mode customisations for the static builder.
(function(root) {
  var exportObj = typeof exports !== "undefined" && exports !== null ? exports : root;
  var ORIGINAL_PILOT_POINTS = {
    "00muplinkprototype-wat1": 22,
    "066": 46,
    "709thlegionace": 43,
    "aaylasecura": 47,
    "adonfox-battleoverendor-lsl": 44,
    "aftabackbar": 32,
    "agentterex": 32,
    "agenttierny": 49,
    "amaxinewarrior": 31,
    "anakinskywalker-btlbywing": 48,
    "arlizhadrassian": 35,
    "avenger": 55,
    "axe": 26,
    "axe-siegeofcoruscant-lsl": 30,
    "backstabber-battleofyavin-lsl": 36,
    "baktoidprototype-siegeofcoruscant-lsl": 25,
    "baronoftheempire": 31,
    "bb8": 23,
    "benthictwotubes": 45,
    "berwerkret": 35,
    "biggsdarklighter-battleofyavin-lsl": 44,
    "blacksquadronscout": 33,
    "blacksunassassin": 45,
    "blacksunbodyguard-wat1": 43,
    "blacksunenforcer": 42,
    "bladesquadronveteran": 41,
    "bluesquadronpilot": 39,
    "bluesquadronrookie": 42,
    "bluesquadronscout": 43,
    "bokatankryze": 56,
    "bokatankryze-separatistalliance": 57,
    "boost": 24,
    "bravoflightofficer": 28,
    "braylenstramm-battleoverendor-lsl": 53,
    "caithrenalli": 47,
    "caithrenalli-btanr2ywing": 31,
    "captaincardinal": 60,
    "captaindobbs": 70,
    "captainhark": 53,
    "captainjonus": 44,
    "captainkagi": 47,
    "captainsear": 44,
    "captainyorr-battleoverendor-lsl": 72,
    "captainyorr-wat1": 47,
    "caridaacademycadet": 32,
    "cartelmarauder": 37,
    "chewbacca": 68,
    "cobaltsquadronbomber": 50,
    "colossusstationmechanic": 26,
    "commandantgoran": 43,
    "contractedscout": 41,
    "contrail": 31,
    "contrail-siegeofcoruscant-lsl": 32,
    "countdooku-siegeofcoruscant-lsl": 64,
    "covanell": 37,
    "crymorahgoon": 29,
    "dacebonearm": 29,
    "dashrendar-swz103-lsl-rebelalliance": 74,
    "dashrendar-swz103-lsl-scumandvillainy": 74,
    "dashrendar-swz103-rebelalliance": 77,
    "dbs32c-siegeofcoruscant-lsl": 30,
    "dbs404-siegeofcoruscant-lsl": 30,
    "deathwatchwarrior": 53,
    "deltasquadronpilot": 67,
    "depabillaba-wat1": 38,
    "dextiree-battleofyavin-lsl": 31,
    "dfs081": 22,
    "dfs081-siegeofcoruscant-lsl": 23,
    "dfs420-wat1": 24,
    "dgs286": 39,
    "dineeellberger": 29,
    "dis347-siegeofcoruscant-lsl": 34,
    "dist81": 36,
    "dist81-siegeofcoruscant-lsl": 38,
    "dj-wat1": 25,
    "doctoraphra": 53,
    "drearenthal": 46,
    "drift": 29,
    "dutchvander-battleofyavin-lsl": 44,
    "echo-pnp-lsl": 53,
    "edonkappehl": 52,
    "edriotwotubes": 41,
    "enricpryde-wat1": 62,
    "essaratill-wat1": 38,
    "evaanverlaine": 32,
    "ezrabridger": 40,
    "ezrabridger-gauntletfighter": 65,
    "ezrabridger-sheathipedeclassshuttle": 37,
    "feethanottrawautopilot": 34,
    "fennrau-sheathipedeclassshuttle": 45,
    "firstordertestpilot": 55,
    "fn2187-wat1": 28,
    "foremanproach": 27,
    "freightercaptain": 41,
    "g4rgorvm": 25,
    "gammasquadronace": 29,
    "gamutkey": 31,
    "gandfindsman": 41,
    "garvendreis-battleofyavin-lsl": 47,
    "gavynsykes": 30,
    "goji": 29,
    "goldsquadrontrooper": 25,
    "gorgol": 29,
    "graysquadronbomber": 29,
    "graz": 44,
    "guildbountyhunter": 46,
    "halliobas-wat1": 47,
    "hansolo-battleofyavin-lsl": 84,
    "haorchallprototype": 22,
    "hawk": 48,
    "hawk-clonez95headhunter": 25,
    "hefftobber": 43,
    "herasyndulla": 38,
    "hiredgun": 30,
    "holokand-battleofyavin-lsl": 34,
    "hortonsalm": 36,
    "idenversio": 42,
    "idenversio-battleofyavin-lsl": 64,
    "ig111": 37,
    "imdaartestpilot": 43,
    "imperialsupercommando": 54,
    "inaldra": 27,
    "jag": 47,
    "jag-siegeofcoruscant-lsl": 47,
    "jakkugunrunner": 28,
    "jannah-wat1": 42,
    "januskasmir-wat1": 34,
    "jarekyeager": 28,
    "jaycristubbs": 43,
    "jekporkins": 41,
    "jekporkins-battleofyavin": 54,
    "jinatasecurityofficer": 39,
    "joyrekkoff": 45,
    "kashyyykdefender": 44,
    "kazudaxiono": 37,
    "kendyidele-battleoverendor-lsl": 48,
    "kickback": 27,
    "kijimispicerunner": 29,
    "killer": 24,
    "klick-siegeofcoruscant-lsl": 36,
    "knack": 26,
    "koshkafrost": 69,
    "l337": 41,
    "l337-escapecraft": 25,
    "landocalrissian-battleoverendor-lsl": 75,
    "leebo": 75,
    "leebo-swz103-lsl-rebelalliance": 69,
    "leebo-swz103-lsl-scumandvillainy": 69,
    "leebo-swz103-rebelalliance": 71,
    "leevantenza": 41,
    "legafossang": 31,
    "lieutenantdormitz": 64,
    "lieutenantgalek": 30,
    "lieutenanthebsly-battleoverendor-lsl": 38,
    "lieutenantkarsabi": 33,
    "lingaava": 30,
    "logisticsdivisionpilot": 31,
    "lothalrebel": 68,
    "lukeskywalker-battleofyavin-lsl": 60,
    "magnaguardexecutioner": 37,
    "magnaguardprotector": 39,
    "majormianda-battleoverendor-lsl": 41,
    "majorrhymer": 35,
    "majorstridan": 61,
    "majorvynder": 38,
    "manaroo": 43,
    "mandalorianresistancepilot": 54,
    "matchstick": 39,
    "maulermithel": 29,
    "mausmonare-battleoverendor-lsl": 42,
    "miningguildsentry": 22,
    "nimichireen": 48,
    "nodinchavdri": 33,
    "norrawexley-btla4ywing": 39,
    "obsidiansquadronpilot": 23,
    "oddball": 29,
    "oddball-arc170starfighter": 48,
    "oddball-btlbywing": 37,
    "oddball-nimbusclassvwing": 30,
    "oddball-siegeofcoruscant-lsl": 50,
    "omegasquadronace": 28,
    "onderonoppressor": 39,
    "onyxsquadronace": 71,
    "onyxsquadronscout": 27,
    "onyxsquadronsentry": 35,
    "outerrimenforcer": 45,
    "outerrimpioneer": 26,
    "outerrimsmuggler": 67,
    "padmeamidala": 35,
    "padric": 32,
    "petranakiarenaace": 36,
    "planetarysentinel": 32,
    "popskrail": 36,
    "popskrail-battleofyavin-lsl": 35,
    "precisehunter": 23,
    "princexizor": 46,
    "r1j5": 24,
    "r2d2": 30,
    "redfuryzealot": 41,
    "redsquadronbomber": 30,
    "resistancesympathizer": 55,
    "rhosquadronpilot": 34,
    "rhysdallows-wat1": 46,
    "riodurant-wat1": 42,
    "sabersquadronace": 37,
    "sabinewren": 41,
    "saeseetiin": 39,
    "sapphire2-battleoverendor-lsl": 38,
    "sarcoplank": 29,
    "scimitar1-battleoverendor-lsl": 36,
    "scimitar3-battleoverendor-lsl": 34,
    "scimitarsquadronpilot": 27,
    "scythe6-battleoverendor-lsl": 42,
    "separatistbomber": 28,
    "separatistinterceptor": 34,
    "separatistpredator": 38,
    "serissu": 40,
    "shaakti-siegeofcoruscant-lsl": 42,
    "shadowcollectiveoperator": 53,
    "shadowporthunter": 51,
    "shadowsquadronescort": 28,
    "shadowsquadronveteran": 31,
    "shasazaro": 32,
    "sienarspecialist": 26,
    "sigma4-battleofyavin-lsl": 40,
    "sigma5-battleofyavin-lsl": 41,
    "sigma6-battleofyavin-lsl": 41,
    "sigma7-battleofyavin-lsl": 43,
    "sigmasquadronace": 48,
    "skakoanace": 37,
    "slider": 25,
    "soontirfel-battleoverendor-lsl": 49,
    "spicerunner": 27,
    "squadsevenveteran": 44,
    "stalgasinhiveguard": 33,
    "starkillerbasepilot": 58,
    "stub": 29,
    "swoop": 26,
    "takajamoreesa": 31,
    "tapusk": 33,
    "tarfful-wat1": 59,
    "technounionbomber": 26,
    "tempestsquadronpilot": 35,
    "tezanasz": 35,
    "tomaxbren": 34,
    "torradoza-wat1": 27,
    "trandoshanslaver": 51,
    "tucker": 25,
    "unkarplutt": 29,
    "vagabond": 32,
    "viktorhel": 42,
    "vimoradi": 24,
    "vizier": 41,
    "wampa-battleofyavin-lsl": 31,
    "wattambor": 39,
    "whisper-pnp-ls": 61,
    "wildspacefringer": 69,
    "wilhufftarkin": 29,
    "wilsateshlo": 31,
    "wolffe-siegeofcoruscant-lsl": 50,
    "yendor-battleoverendor-lsl": 50,
    "zeborrelios-sheathipedeclassshuttle": 30,
    "zertikstrom": 39,
    "zetasquadronpilot": 27
  };

  function getPilotXws(pilot) {
    if (pilot == null) {
      return null;
    }
    if (pilot.xws != null) {
      return pilot.xws;
    }
    if (pilot.canonical_name != null) {
      return pilot.canonical_name;
    }
    if ((pilot.name != null) && (pilot.name.canonicalize != null)) {
      return pilot.name.canonicalize();
    }
    return null;
  }

  function eachPilot(fn) {
    var id, pilots;
    pilots = exportObj.pilotsById;
    if (pilots == null) {
      return;
    }
    for (id in pilots) {
      if (Object.prototype.hasOwnProperty.call(pilots, id) && pilots[id] != null) {
        fn(pilots[id]);
      }
    }
  }

  function initialisePandorumPilotPoints() {
    eachPilot(function(pilot) {
      var originalPoints, xws;
      xws = getPilotXws(pilot);
      if ((xws == null) || !Object.prototype.hasOwnProperty.call(ORIGINAL_PILOT_POINTS, xws)) {
        return;
      }
      originalPoints = ORIGINAL_PILOT_POINTS[xws];
      if (pilot.pandorum_points == null) {
        pilot.pandorum_points = pilot.points;
      }
      pilot.wildspace_points = originalPoints;
      pilot.pandorum_points_modified = Number(pilot.pandorum_points) !== Number(originalPoints);
    });
  }

  exportObj.applyPandorumModePoints = function(enabled) {
    exportObj.pandorumModeActive = !!enabled;
    eachPilot(function(pilot) {
      if (pilot.pandorum_points_modified) {
        pilot.points = enabled ? pilot.pandorum_points : pilot.wildspace_points;
      }
    });
  };

  exportObj.isPandorumModifiedPilot = function(pilot) {
    return !!(pilot && pilot.pandorum_points_modified);
  };

  if (exportObj.setupCommonCardData != null) {
    var originalSetupCommonCardData = exportObj.setupCommonCardData;
    exportObj.setupCommonCardData = function(basic_cards) {
      var result = originalSetupCommonCardData.apply(this, arguments);
      initialisePandorumPilotPoints();
      exportObj.applyPandorumModePoints(false);
      return result;
    };
  }

  function decoratePilotText(builder, pilot, text) {
    if (!(builder && builder.isPandorum && exportObj.isPandorumModifiedPilot(pilot))) {
      return text;
    }
    return '<span class="pandorum-modified-pilot" title="Wild Space: ' + pilot.wildspace_points + ' / Pandorum: ' + pilot.pandorum_points + '">' + text + '</span>';
  }

  if ((exportObj.SquadBuilder != null) && !exportObj.SquadBuilder.prototype.pandorumModePatchInstalled) {
    exportObj.SquadBuilder.prototype.pandorumModePatchInstalled = true;

    var originalSetupUI = exportObj.SquadBuilder.prototype.setupUI;
    exportObj.SquadBuilder.prototype.setupUI = function() {
      var result = originalSetupUI.apply(this, arguments);
      if (this.game_type_selector != null) {
        this.game_type_selector.find('option[value="epic"]').text('Pandorum').attr('defaultText', 'Pandorum').removeClass('translated');
        this.game_type_selector.find('option[value="quickbuild"]').remove();
        if (this.game_type_selector.data('select2') != null) {
          this.game_type_selector.select2('destroy');
          this.game_type_selector.select2({ minimumResultsForSearch: -1 });
        }
      }
      return result;
    };

    var originalOnGameTypeChanged = exportObj.SquadBuilder.prototype.onGameTypeChanged;
    exportObj.SquadBuilder.prototype.onGameTypeChanged = function(gametype, cb) {
      var pandorumMode = gametype === 'epic' || gametype === 'pandorum';
      this.isPandorum = pandorumMode;
      exportObj.applyPandorumModePoints(pandorumMode);
      return originalOnGameTypeChanged.call(this, pandorumMode ? 'wildspace' : gametype, function() {
        this.isPandorum = pandorumMode;
        if (pandorumMode) {
          this.isWildSpace = true;
        }
        if (cb != null) {
          return cb();
        }
      }.bind(this));
    };

    var originalGetAvailablePilots = exportObj.SquadBuilder.prototype.getAvailablePilotsForShipIncluding;
    exportObj.SquadBuilder.prototype.getAvailablePilotsForShipIncluding = function() {
      var pilot, result, results, _i, _len;
      results = originalGetAvailablePilots.apply(this, arguments);
      if (this.isPandorum) {
        for (_i = 0, _len = results.length; _i < _len; _i++) {
          result = results[_i];
          pilot = exportObj.pilotsById[result.id];
          if (exportObj.isPandorumModifiedPilot(pilot)) {
            result.pandorum_modified = true;
            result.text = decoratePilotText(this, pilot, result.text);
          }
        }
      }
      return results;
    };
  }

  if ((root.Ship != null) && !root.Ship.prototype.pandorumModePatchInstalled) {
    root.Ship.prototype.pandorumModePatchInstalled = true;
    var originalUpdateSelections = root.Ship.prototype.updateSelections;
    root.Ship.prototype.updateSelections = function() {
      var data, result;
      result = originalUpdateSelections.apply(this, arguments);
      if ((this.pilot_selector != null) && (this.pilot != null) && this.builder && this.builder.isPandorum && exportObj.isPandorumModifiedPilot(this.pilot)) {
        data = this.pilot_selector.select2('data');
        if (data != null) {
          data.text = decoratePilotText(this.builder, this.pilot, data.text);
          this.pilot_selector.select2('data', data);
        }
      }
      return result;
    };
  }
})(this);
