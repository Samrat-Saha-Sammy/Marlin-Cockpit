const boards = {
  "020006": [
    {
      name: "BOARD_RAMPS_OLD",
      id: 1000,
      desc: "MEGA/RAMPS up to 1.2",
    },
    {
      name: "BOARD_RAMPS_13_EFB",
      id: 1010,
      desc: "RAMPS 1.3 (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_RAMPS_13_EEB",
      id: 1011,
      desc: "RAMPS 1.3 (Power outputs: Hotend0, Hotend1, Bed)",
    },
    {
      name: "BOARD_RAMPS_13_EFF",
      id: 1012,
      desc: "RAMPS 1.3 (Power outputs: Hotend, Fan0, Fan1)",
    },
    {
      name: "BOARD_RAMPS_13_EEF",
      id: 1013,
      desc: "RAMPS 1.3 (Power outputs: Hotend0, Hotend1, Fan)",
    },
    {
      name: "BOARD_RAMPS_13_SF",
      id: 1014,
      desc: "RAMPS 1.3 (Power outputs: Spindle, Controller Fan)",
    },
    {
      name: "BOARD_RAMPS_14_EFB",
      id: 1020,
      desc: "RAMPS 1.4 (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_RAMPS_14_EEB",
      id: 1021,
      desc: "RAMPS 1.4 (Power outputs: Hotend0, Hotend1, Bed)",
    },
    {
      name: "BOARD_RAMPS_14_EFF",
      id: 1022,
      desc: "RAMPS 1.4 (Power outputs: Hotend, Fan0, Fan1)",
    },
    {
      name: "BOARD_RAMPS_14_EEF",
      id: 1023,
      desc: "RAMPS 1.4 (Power outputs: Hotend0, Hotend1, Fan)",
    },
    {
      name: "BOARD_RAMPS_14_SF",
      id: 1024,
      desc: "RAMPS 1.4 (Power outputs: Spindle, Controller Fan)",
    },
    {
      name: "BOARD_RAMPS_PLUS_EFB",
      id: 1030,
      desc: "RAMPS Plus 3DYMY (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_RAMPS_PLUS_EEB",
      id: 1031,
      desc: "RAMPS Plus 3DYMY (Power outputs: Hotend0, Hotend1, Bed)",
    },
    {
      name: "BOARD_RAMPS_PLUS_EFF",
      id: 1032,
      desc: "RAMPS Plus 3DYMY (Power outputs: Hotend, Fan0, Fan1)",
    },
    {
      name: "BOARD_RAMPS_PLUS_EEF",
      id: 1033,
      desc: "RAMPS Plus 3DYMY (Power outputs: Hotend0, Hotend1, Fan)",
    },
    {
      name: "BOARD_RAMPS_PLUS_SF",
      id: 1034,
      desc: "RAMPS Plus 3DYMY (Power outputs: Spindle, Controller Fan)",
    },
    {
      name: "BOARD_3DRAG",
      id: 1100,
      desc: "3Drag Controller",
    },
    {
      name: "BOARD_K8200",
      id: 1101,
      desc: "Velleman K8200 Controller (derived from 3Drag Controller)",
    },
    {
      name: "BOARD_K8400",
      id: 1102,
      desc: "Velleman K8400 Controller (derived from 3Drag Controller)",
    },
    {
      name: "BOARD_K8600",
      id: 1103,
      desc: "Velleman K8600 Controller (Vertex Nano)",
    },
    {
      name: "BOARD_BAM_DICE",
      id: 1104,
      desc: "2PrintBeta BAM&DICE with STK drivers",
    },
    {
      name: "BOARD_BAM_DICE_DUE",
      id: 1105,
      desc: "2PrintBeta BAM&DICE Due with STK drivers",
    },
    {
      name: "BOARD_MKS_BASE",
      id: 1106,
      desc: "MKS BASE v1.0",
    },
    {
      name: "BOARD_MKS_BASE_14",
      id: 1107,
      desc: "MKS BASE v1.4 with Allegro A4982 stepper drivers",
    },
    {
      name: "BOARD_MKS_BASE_15",
      id: 1108,
      desc: "MKS BASE v1.5 with Allegro A4982 stepper drivers",
    },
    {
      name: "BOARD_MKS_BASE_16",
      id: 1109,
      desc: "MKS BASE v1.6 with Allegro A4982 stepper drivers",
    },
    {
      name: "BOARD_MKS_BASE_HEROIC",
      id: 1110,
      desc: "MKS BASE 1.0 with Heroic HR4982 stepper drivers",
    },
    {
      name: "BOARD_MKS_GEN_13",
      id: 1111,
      desc: "MKS GEN v1.3 or 1.4",
    },
    {
      name: "BOARD_MKS_GEN_L",
      id: 1112,
      desc: "MKS GEN L",
    },
    {
      name: "BOARD_KFB_2",
      id: 1113,
      desc: "BigTreeTech or BIQU KFB2.0",
    },
    {
      name: "BOARD_ZRIB_V20",
      id: 1114,
      desc: "zrib V2.0 control board (Chinese knock off RAMPS replica)",
    },
    {
      name: "BOARD_FELIX2",
      id: 1115,
      desc: "Felix 2.0+ Electronics Board (RAMPS like)",
    },
    {
      name: "BOARD_RIGIDBOARD",
      id: 1116,
      desc: "Invent-A-Part RigidBoard",
    },
    {
      name: "BOARD_RIGIDBOARD_V2",
      id: 1117,
      desc: "Invent-A-Part RigidBoard V2",
    },
    {
      name: "BOARD_SAINSMART_2IN1",
      id: 1118,
      desc: "Sainsmart 2-in-1 board",
    },
    {
      name: "BOARD_ULTIMAKER",
      id: 1119,
      desc: "Ultimaker",
    },
    {
      name: "BOARD_ULTIMAKER_OLD",
      id: 1120,
      desc: "Ultimaker (Older electronics. Pre 1.5.4. This is rare)",
    },
    {
      name: "BOARD_AZTEEG_X3",
      id: 1121,
      desc: "Azteeg X3",
    },
    {
      name: "BOARD_AZTEEG_X3_PRO",
      id: 1122,
      desc: "Azteeg X3 Pro",
    },
    {
      name: "BOARD_ULTIMAIN_2",
      id: 1123,
      desc: "Ultimainboard 2.x (Uses TEMP_SENSOR 20)",
    },
    {
      name: "BOARD_RUMBA",
      id: 1124,
      desc: "Rumba",
    },
    {
      name: "BOARD_RUMBA_RAISE3D",
      id: 1125,
      desc: "Raise3D N series Rumba derivative",
    },
    {
      name: "BOARD_RL200",
      id: 1126,
      desc: "Rapide Lite 200 (v1, low-cost RUMBA clone with drv)",
    },
    {
      name: "BOARD_FORMBOT_TREX2PLUS",
      id: 1127,
      desc: "Formbot T-Rex 2 Plus",
    },
    {
      name: "BOARD_FORMBOT_TREX3",
      id: 1128,
      desc: "Formbot T-Rex 3",
    },
    {
      name: "BOARD_FORMBOT_RAPTOR",
      id: 1129,
      desc: "Formbot Raptor",
    },
    {
      name: "BOARD_FORMBOT_RAPTOR2",
      id: 1130,
      desc: "Formbot Raptor 2",
    },
    {
      name: "BOARD_BQ_ZUM_MEGA_3D",
      id: 1131,
      desc: "bq ZUM Mega 3D",
    },
    {
      name: "BOARD_MAKEBOARD_MINI",
      id: 1132,
      desc: "MakeBoard Mini v2.1.2 is a control board sold by MicroMake",
    },
    {
      name: "BOARD_TRIGORILLA_13",
      id: 1133,
      desc: "TriGorilla Anycubic version 1.3-based on RAMPS EFB",
    },
    {
      name: "BOARD_TRIGORILLA_14",
      id: 1134,
      desc: "  ... Ver 1.4",
    },
    {
      name: "BOARD_TRIGORILLA_14_11",
      id: 1135,
      desc: "  ... Rev 1.1 (new servo pin order)",
    },
    {
      name: "BOARD_RAMPS_ENDER_4",
      id: 1136,
      desc: "Creality: Ender-4, CR-8",
    },
    {
      name: "BOARD_RAMPS_CREALITY",
      id: 1137,
      desc: "Creality: CR10S, CR20, CR-X",
    },
    {
      name: "BOARD_RAMPS_DAGOMA",
      id: 1138,
      desc: "Dagoma F5",
    },
    {
      name: "BOARD_FYSETC_F6_13",
      id: 1139,
      desc: "FYSETC F6 1.3",
    },
    {
      name: "BOARD_FYSETC_F6_14",
      id: 1140,
      desc: "FYSETC F6 1.4",
    },
    {
      name: "BOARD_DUPLICATOR_I3_PLUS",
      id: 1141,
      desc: "Wanhao Duplicator i3 Plus",
    },
    {
      name: "BOARD_VORON",
      id: 1142,
      desc: "VORON Design",
    },
    {
      name: "BOARD_TRONXY_V3_1_0",
      id: 1143,
      desc: "Tronxy TRONXY-V3-1.0",
    },
    {
      name: "BOARD_Z_BOLT_X_SERIES",
      id: 1144,
      desc: "Z-Bolt X Series",
    },
    {
      name: "BOARD_TT_OSCAR",
      id: 1145,
      desc: "TT OSCAR",
    },
    {
      name: "BOARD_OVERLORD",
      id: 1146,
      desc: "Overlord/Overlord Pro",
    },
    {
      name: "BOARD_HJC2560C_REV1",
      id: 1147,
      desc: "ADIMLab Gantry v1",
    },
    {
      name: "BOARD_HJC2560C_REV2",
      id: 1148,
      desc: "ADIMLab Gantry v2",
    },
    {
      name: "BOARD_TANGO",
      id: 1149,
      desc: "BIQU Tango V1",
    },
    {
      name: "BOARD_MKS_GEN_L_V2",
      id: 1150,
      desc: "MKS GEN L V2",
    },
    {
      name: "BOARD_COPYMASTER_3D",
      id: 1151,
      desc: "Copymaster 3D",
    },
    {
      name: "BOARD_ORTUR_4",
      id: 1152,
      desc: "Ortur 4",
    },
    {
      name: "BOARD_TENLOG_D3_HERO",
      id: 1153,
      desc: "Tenlog D3 Hero IDEX printer",
    },
    {
      name: "BOARD_RAMBO",
      id: 1200,
      desc: "Rambo",
    },
    {
      name: "BOARD_MINIRAMBO",
      id: 1201,
      desc: "Mini-Rambo",
    },
    {
      name: "BOARD_MINIRAMBO_10A",
      id: 1202,
      desc: "Mini-Rambo 1.0a",
    },
    {
      name: "BOARD_EINSY_RAMBO",
      id: 1203,
      desc: "Einsy Rambo",
    },
    {
      name: "BOARD_EINSY_RETRO",
      id: 1204,
      desc: "Einsy Retro",
    },
    {
      name: "BOARD_SCOOVO_X9H",
      id: 1205,
      desc: "abee Scoovo X9H",
    },
    {
      name: "BOARD_CNCONTROLS_11",
      id: 1300,
      desc: "Cartesio CN Controls V11",
    },
    {
      name: "BOARD_CNCONTROLS_12",
      id: 1301,
      desc: "Cartesio CN Controls V12",
    },
    {
      name: "BOARD_CNCONTROLS_15",
      id: 1302,
      desc: "Cartesio CN Controls V15",
    },
    {
      name: "BOARD_CHEAPTRONIC",
      id: 1303,
      desc: "Cheaptronic v1.0",
    },
    {
      name: "BOARD_CHEAPTRONIC_V2",
      id: 1304,
      desc: "Cheaptronic v2.0",
    },
    {
      name: "BOARD_MIGHTYBOARD_REVE",
      id: 1305,
      desc: "Makerbot Mightyboard Revision E",
    },
    {
      name: "BOARD_MEGATRONICS",
      id: 1306,
      desc: "Megatronics",
    },
    {
      name: "BOARD_MEGATRONICS_2",
      id: 1307,
      desc: "Megatronics v2.0",
    },
    {
      name: "BOARD_MEGATRONICS_3",
      id: 1308,
      desc: "Megatronics v3.0",
    },
    {
      name: "BOARD_MEGATRONICS_31",
      id: 1309,
      desc: "Megatronics v3.1",
    },
    {
      name: "BOARD_MEGATRONICS_32",
      id: 1310,
      desc: "Megatronics v3.2",
    },
    {
      name: "BOARD_ELEFU_3",
      id: 1311,
      desc: "Elefu Ra Board (v3)",
    },
    {
      name: "BOARD_LEAPFROG",
      id: 1312,
      desc: "Leapfrog",
    },
    {
      name: "BOARD_MEGACONTROLLER",
      id: 1313,
      desc: "Mega controller",
    },
    {
      name: "BOARD_GT2560_REV_A",
      id: 1314,
      desc: "Geeetech GT2560 Rev. A",
    },
    {
      name: "BOARD_GT2560_REV_A_PLUS",
      id: 1315,
      desc: "Geeetech GT2560 Rev. A+ (with auto level probe)",
    },
    {
      name: "BOARD_GT2560_V3",
      id: 1316,
      desc: "Geeetech GT2560 Rev B for A10(M/D)",
    },
    {
      name: "BOARD_GT2560_V3_MC2",
      id: 1317,
      desc: "Geeetech GT2560 Rev B for Mecreator2",
    },
    {
      name: "BOARD_GT2560_V3_A20",
      id: 1318,
      desc: "Geeetech GT2560 Rev B for A20(M/D)",
    },
    {
      name: "BOARD_EINSTART_S",
      id: 1319,
      desc: "Einstart retrofit",
    },
    {
      name: "BOARD_WANHAO_ONEPLUS",
      id: 1320,
      desc: "Wanhao 0ne+ i3 Mini",
    },
    {
      name: "BOARD_LEAPFROG_XEED2015",
      id: 1321,
      desc: "Leapfrog Xeed 2015",
    },
    {
      name: "BOARD_PICA_REVB",
      id: 1322,
      desc: "PICA Shield (original version)",
    },
    {
      name: "BOARD_PICA",
      id: 1323,
      desc: "PICA Shield (rev C or later)",
    },
    {
      name: "BOARD_INTAMSYS40",
      id: 1324,
      desc: "Intamsys 4.0 (Funmat HT)",
    },
    {
      name: "BOARD_MINITRONICS",
      id: 1400,
      desc: "Minitronics v1.0/1.1",
    },
    {
      name: "BOARD_SILVER_GATE",
      id: 1401,
      desc: "Silvergate v1.0",
    },
    {
      name: "BOARD_SANGUINOLOLU_11",
      id: 1500,
      desc: "Sanguinololu < 1.2",
    },
    {
      name: "BOARD_SANGUINOLOLU_12",
      id: 1501,
      desc: "Sanguinololu 1.2 and above",
    },
    {
      name: "BOARD_MELZI",
      id: 1502,
      desc: "Melzi",
    },
    {
      name: "BOARD_MELZI_V2",
      id: 1503,
      desc: "Melzi V2",
    },
    {
      name: "BOARD_MELZI_MAKR3D",
      id: 1504,
      desc: "Melzi with ATmega1284 (MaKr3d version)",
    },
    {
      name: "BOARD_MELZI_CREALITY",
      id: 1505,
      desc: "Melzi Creality3D board (for CR-10 etc)",
    },
    {
      name: "BOARD_MELZI_MALYAN",
      id: 1506,
      desc: "Melzi Malyan M150 board",
    },
    {
      name: "BOARD_MELZI_TRONXY",
      id: 1507,
      desc: "Tronxy X5S",
    },
    {
      name: "BOARD_STB_11",
      id: 1508,
      desc: "STB V1.1",
    },
    {
      name: "BOARD_AZTEEG_X1",
      id: 1509,
      desc: "Azteeg X1",
    },
    {
      name: "BOARD_ANET_10",
      id: 1510,
      desc: "Anet 1.0 (Melzi clone)",
    },
    {
      name: "BOARD_GEN3_MONOLITHIC",
      id: 1600,
      desc: "Gen3 Monolithic Electronics",
    },
    {
      name: "BOARD_GEN3_PLUS",
      id: 1601,
      desc: "Gen3+",
    },
    {
      name: "BOARD_GEN6",
      id: 1602,
      desc: "Gen6",
    },
    {
      name: "BOARD_GEN6_DELUXE",
      id: 1603,
      desc: "Gen6 deluxe",
    },
    {
      name: "BOARD_GEN7_CUSTOM",
      id: 1604,
      desc: "Gen7 custom (Alfons3 Version) ",
    },
    {
      name: "BOARD_GEN7_12",
      id: 1605,
      desc: "Gen7 v1.1, v1.2",
    },
    {
      name: "BOARD_GEN7_13",
      id: 1606,
      desc: "Gen7 v1.3",
    },
    {
      name: "BOARD_GEN7_14",
      id: 1607,
      desc: "Gen7 v1.4",
    },
    {
      name: "BOARD_OMCA_A",
      id: 1608,
      desc: "Alpha OMCA board",
    },
    {
      name: "BOARD_OMCA",
      id: 1609,
      desc: "Final OMCA board",
    },
    {
      name: "BOARD_SETHI",
      id: 1610,
      desc: "Sethi 3D_1",
    },
    {
      name: "BOARD_TEENSYLU",
      id: 1700,
      desc: "Teensylu",
    },
    {
      name: "BOARD_PRINTRBOARD",
      id: 1701,
      desc: "Printrboard (AT90USB1286)",
    },
    {
      name: "BOARD_PRINTRBOARD_REVF",
      id: 1702,
      desc: "Printrboard Revision F (AT90USB1286)",
    },
    {
      name: "BOARD_BRAINWAVE",
      id: 1703,
      desc: "Brainwave (AT90USB646)",
    },
    {
      name: "BOARD_BRAINWAVE_PRO",
      id: 1704,
      desc: "Brainwave Pro (AT90USB1286)",
    },
    {
      name: "BOARD_SAV_MKI",
      id: 1705,
      desc: "SAV Mk-I (AT90USB1286)",
    },
    {
      name: "BOARD_TEENSY2",
      id: 1706,
      desc: "Teensy++2.0 (AT90USB1286)",
    },
    {
      name: "BOARD_5DPRINT",
      id: 1707,
      desc: "5DPrint D8 Driver Board",
    },
    {
      name: "BOARD_RAMPS_14_RE_ARM_EFB",
      id: 2000,
      desc: "Re-ARM with RAMPS 1.4 (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_RAMPS_14_RE_ARM_EEB",
      id: 2001,
      desc: "Re-ARM with RAMPS 1.4 (Power outputs: Hotend0, Hotend1, Bed)",
    },
    {
      name: "BOARD_RAMPS_14_RE_ARM_EFF",
      id: 2002,
      desc: "Re-ARM with RAMPS 1.4 (Power outputs: Hotend, Fan0, Fan1)",
    },
    {
      name: "BOARD_RAMPS_14_RE_ARM_EEF",
      id: 2003,
      desc: "Re-ARM with RAMPS 1.4 (Power outputs: Hotend0, Hotend1, Fan)",
    },
    {
      name: "BOARD_RAMPS_14_RE_ARM_SF",
      id: 2004,
      desc: "Re-ARM with RAMPS 1.4 (Power outputs: Spindle, Controller Fan)",
    },
    {
      name: "BOARD_MKS_SBASE",
      id: 2005,
      desc: "MKS-Sbase (Power outputs: Hotend0, Hotend1, Bed, Fan)",
    },
    {
      name: "BOARD_AZSMZ_MINI",
      id: 2006,
      desc: "AZSMZ Mini",
    },
    {
      name: "BOARD_BIQU_BQ111_A4",
      id: 2007,
      desc: "BIQU BQ111-A4 (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_SELENA_COMPACT",
      id: 2008,
      desc:
        "Selena Compact (Power outputs: Hotend0, Hotend1, Bed0, Bed1, Fan0, Fan1)",
    },
    {
      name: "BOARD_BIQU_B300_V1_0",
      id: 2009,
      desc: "BIQU B300_V1.0 (Power outputs: Hotend0, Fan, Bed, SPI Driver)",
    },
    {
      name: "BOARD_MKS_SGEN_L",
      id: 2010,
      desc: "MKS-SGen-L (Power outputs: Hotend0, Hotend1, Bed, Fan)",
    },
    {
      name: "BOARD_GMARSH_X6_REV1",
      id: 2011,
      desc: "GMARSH X6 board, revision 1 prototype",
    },
    {
      name: "BOARD_BTT_SKR_V1_1",
      id: 2012,
      desc: "BigTreeTech SKR v1.1 (Power outputs: Hotend0, Hotend1, Fan, Bed)",
    },
    {
      name: "BOARD_BTT_SKR_V1_3",
      id: 2013,
      desc: "BigTreeTech SKR v1.3 (Power outputs: Hotend0, Hotend1, Fan, Bed)",
    },
    {
      name: "BOARD_BTT_SKR_V1_4",
      id: 2014,
      desc: "BigTreeTech SKR v1.4 (Power outputs: Hotend0, Hotend1, Fan, Bed)",
    },
    {
      name: "BOARD_MKS_SGEN",
      id: 2500,
      desc: "MKS-SGen (Power outputs: Hotend0, Hotend1, Bed, Fan)",
    },
    {
      name: "BOARD_AZTEEG_X5_GT",
      id: 2501,
      desc: "Azteeg X5 GT (Power outputs: Hotend0, Hotend1, Bed, Fan)",
    },
    {
      name: "BOARD_AZTEEG_X5_MINI",
      id: 2502,
      desc: "Azteeg X5 Mini (Power outputs: Hotend0, Bed, Fan)",
    },
    {
      name: "BOARD_AZTEEG_X5_MINI_WIFI",
      id: 2503,
      desc: "Azteeg X5 Mini Wifi (Power outputs: Hotend0, Bed, Fan)",
    },
    {
      name: "BOARD_COHESION3D_REMIX",
      id: 2504,
      desc: "Cohesion3D ReMix",
    },
    {
      name: "BOARD_COHESION3D_MINI",
      id: 2505,
      desc: "Cohesion3D Mini",
    },
    {
      name: "BOARD_SMOOTHIEBOARD",
      id: 2506,
      desc: "Smoothieboard",
    },
    {
      name: "BOARD_TH3D_EZBOARD",
      id: 2507,
      desc: "TH3D EZBoard v1.0",
    },
    {
      name: "BOARD_BTT_SKR_V1_4_TURBO",
      id: 2508,
      desc:
        "BigTreeTech SKR v1.4 TURBO (Power outputs: Hotend0, Hotend1, Fan, Bed)",
    },
    {
      name: "BOARD_DUE3DOM",
      id: 3000,
      desc: "DUE3DOM for Arduino DUE",
    },
    {
      name: "BOARD_DUE3DOM_MINI",
      id: 3001,
      desc: "DUE3DOM MINI for Arduino DUE",
    },
    {
      name: "BOARD_RADDS",
      id: 3002,
      desc: "RADDS",
    },
    {
      name: "BOARD_RAMPS_FD_V1",
      id: 3003,
      desc: "RAMPS-FD v1",
    },
    {
      name: "BOARD_RAMPS_FD_V2",
      id: 3004,
      desc: "RAMPS-FD v2",
    },
    {
      name: "BOARD_RAMPS_SMART_EFB",
      id: 3005,
      desc: "RAMPS-SMART (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_RAMPS_SMART_EEB",
      id: 3006,
      desc: "RAMPS-SMART (Power outputs: Hotend0, Hotend1, Bed)",
    },
    {
      name: "BOARD_RAMPS_SMART_EFF",
      id: 3007,
      desc: "RAMPS-SMART (Power outputs: Hotend, Fan0, Fan1)",
    },
    {
      name: "BOARD_RAMPS_SMART_EEF",
      id: 3008,
      desc: "RAMPS-SMART (Power outputs: Hotend0, Hotend1, Fan)",
    },
    {
      name: "BOARD_RAMPS_SMART_SF",
      id: 3009,
      desc: "RAMPS-SMART (Power outputs: Spindle, Controller Fan)",
    },
    {
      name: "BOARD_RAMPS_DUO_EFB",
      id: 3010,
      desc: "RAMPS Duo (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_RAMPS_DUO_EEB",
      id: 3011,
      desc: "RAMPS Duo (Power outputs: Hotend0, Hotend1, Bed)",
    },
    {
      name: "BOARD_RAMPS_DUO_EFF",
      id: 3012,
      desc: "RAMPS Duo (Power outputs: Hotend, Fan0, Fan1)",
    },
    {
      name: "BOARD_RAMPS_DUO_EEF",
      id: 3013,
      desc: "RAMPS Duo (Power outputs: Hotend0, Hotend1, Fan)",
    },
    {
      name: "BOARD_RAMPS_DUO_SF",
      id: 3014,
      desc: "RAMPS Duo (Power outputs: Spindle, Controller Fan)",
    },
    {
      name: "BOARD_RAMPS4DUE_EFB",
      id: 3015,
      desc: "RAMPS4DUE (Power outputs: Hotend, Fan, Bed)",
    },
    {
      name: "BOARD_RAMPS4DUE_EEB",
      id: 3016,
      desc: "RAMPS4DUE (Power outputs: Hotend0, Hotend1, Bed)",
    },
    {
      name: "BOARD_RAMPS4DUE_EFF",
      id: 3017,
      desc: "RAMPS4DUE (Power outputs: Hotend, Fan0, Fan1)",
    },
    {
      name: "BOARD_RAMPS4DUE_EEF",
      id: 3018,
      desc: "RAMPS4DUE (Power outputs: Hotend0, Hotend1, Fan)",
    },
    {
      name: "BOARD_RAMPS4DUE_SF",
      id: 3019,
      desc: "RAMPS4DUE (Power outputs: Spindle, Controller Fan)",
    },
    {
      name: "BOARD_RURAMPS4D_11",
      id: 3020,
      desc:
        "RuRAMPS4Duo v1.1 (Power outputs: Hotend0, Hotend1, Hotend2, Fan0, Fan1, Bed)",
    },
    {
      name: "BOARD_RURAMPS4D_13",
      id: 3021,
      desc:
        "RuRAMPS4Duo v1.3 (Power outputs: Hotend0, Hotend1, Hotend2, Fan0, Fan1, Bed)",
    },
    {
      name: "BOARD_ULTRATRONICS_PRO",
      id: 3022,
      desc: "ReprapWorld Ultratronics Pro V1.0",
    },
    {
      name: "BOARD_ARCHIM1",
      id: 3023,
      desc: "UltiMachine Archim1 (with DRV8825 drivers)",
    },
    {
      name: "BOARD_ARCHIM2",
      id: 3024,
      desc: "UltiMachine Archim2 (with TMC2130 drivers)",
    },
    {
      name: "BOARD_ALLIGATOR",
      id: 3025,
      desc: "Alligator Board R2",
    },
    {
      name: "BOARD_CNCONTROLS_15D",
      id: 3026,
      desc: "Cartesio CN Controls V15 on DUE",
    },
    {
      name: "BOARD_PRINTRBOARD_G2",
      id: 3100,
      desc: "PRINTRBOARD G2",
    },
    {
      name: "BOARD_ADSK",
      id: 3101,
      desc: "Arduino DUE Shield Kit (ADSK)",
    },
    {
      name: "BOARD_STM32F103RE",
      id: 4000,
      desc: "STM32F103RE Libmaple-based STM32F1 controller",
    },
    {
      name: "BOARD_MALYAN_M200",
      id: 4001,
      desc: "STM32C8T6  Libmaple-based STM32F1 controller",
    },
    {
      name: "BOARD_MALYAN_M200_V2",
      id: 4002,
      desc: "STM32F070RB  Libmaple-based STM32F0 controller",
    },
    {
      name: "BOARD_STM3R_MINI",
      id: 4003,
      desc: "STM32F103RE  Libmaple-based STM32F1 controller",
    },
    {
      name: "BOARD_GTM32_PRO_VB",
      id: 4004,
      desc: "STM32F103VET6 controller",
    },
    {
      name: "BOARD_MORPHEUS",
      id: 4005,
      desc: "STM32F103C8 / STM32F103CB  Libmaple-based STM32F1 controller",
    },
    {
      name: "BOARD_CHITU3D",
      id: 4006,
      desc: "Chitu3D (STM32F103RET6)",
    },
    {
      name: "BOARD_MKS_ROBIN",
      id: 4007,
      desc: "MKS Robin (STM32F103ZET6)",
    },
    {
      name: "BOARD_MKS_ROBIN_MINI",
      id: 4008,
      desc: "MKS Robin Mini (STM32F103VET6)",
    },
    {
      name: "BOARD_MKS_ROBIN_NANO",
      id: 4009,
      desc: "MKS Robin Nano (STM32F103VET6)",
    },
    {
      name: "BOARD_MKS_ROBIN_LITE",
      id: 4010,
      desc: "MKS Robin Lite/Lite2 (STM32F103RCT6)",
    },
    {
      name: "BOARD_MKS_ROBIN_LITE3",
      id: 4011,
      desc: "MKS Robin Lite3 (STM32F103RCT6)",
    },
    {
      name: "BOARD_MKS_ROBIN_PRO",
      id: 4012,
      desc: "MKS Robin Pro (STM32F103ZET6)",
    },
    {
      name: "BOARD_BTT_SKR_MINI_V1_1",
      id: 4013,
      desc: "BigTreeTech SKR Mini v1.1 (STM32F103RC)",
    },
    {
      name: "BOARD_BTT_SKR_MINI_E3_V1_0",
      id: 4014,
      desc: "BigTreeTech SKR Mini E3 (STM32F103RC)",
    },
    {
      name: "BOARD_BTT_SKR_MINI_E3_V1_2",
      id: 4015,
      desc: "BigTreeTech SKR Mini E3 V1.2 (STM32F103RC)",
    },
    {
      name: "BOARD_BTT_SKR_MINI_E3_V2_0",
      id: 4016,
      desc: "BigTreeTech SKR Mini E3 V2.0 (STM32F103RC)",
    },
    {
      name: "BOARD_BTT_SKR_E3_DIP",
      id: 4017,
      desc: "BigTreeTech SKR E3 DIP V1.0 (STM32F103RC / STM32F103RE)",
    },
    {
      name: "BOARD_JGAURORA_A5S_A1",
      id: 4018,
      desc: "JGAurora A5S A1 (STM32F103ZET6)",
    },
    {
      name: "BOARD_FYSETC_AIO_II",
      id: 4019,
      desc: "FYSETC AIO_II",
    },
    {
      name: "BOARD_FYSETC_CHEETAH",
      id: 4020,
      desc: "FYSETC Cheetah",
    },
    {
      name: "BOARD_FYSETC_CHEETAH_V12",
      id: 4021,
      desc: "FYSETC Cheetah V1.2",
    },
    {
      name: "BOARD_LONGER3D_LK",
      id: 4022,
      desc: "Alfawise U20/U20+/U30 (Longer3D LK1/2) / STM32F103VET6",
    },
    {
      name: "BOARD_GTM32_MINI",
      id: 4023,
      desc: "STM32F103VET6 controller",
    },
    {
      name: "BOARD_GTM32_MINI_A30",
      id: 4024,
      desc: "STM32F103VET6 controller",
    },
    {
      name: "BOARD_GTM32_REV_B",
      id: 4025,
      desc: "STM32F103VET6 controller",
    },
    {
      name: "BOARD_MKS_ROBIN_E3D",
      id: 4026,
      desc: "MKS Robin E3D (STM32F103RCT6)",
    },
    {
      name: "BOARD_MKS_ROBIN_E3",
      id: 4027,
      desc: "MKS Robin E3 (STM32F103RCT6)",
    },
    {
      name: "BOARD_MALYAN_M300",
      id: 4028,
      desc: "STM32F070-based delta",
    },
    {
      name: "BOARD_CCROBOT_MEEB_3DP",
      id: 4029,
      desc: "ccrobot-online.com MEEB_3DP (STM32F103RC)",
    },
    {
      name: "BOARD_CHITU3D_V5",
      id: 4030,
      desc: "Chitu3D TronXY X5SA V5 Board",
    },
    {
      name: "BOARD_CHITU3D_V6",
      id: 4031,
      desc: "Chitu3D TronXY X5SA V5 Board",
    },
    {
      name: "BOARD_CREALITY_V4",
      id: 4032,
      desc: "Creality v4.x (STM32F103RE)",
    },
    {
      name: "BOARD_TEENSY31_32",
      id: 4100,
      desc: "Teensy3.1 and Teensy3.2",
    },
    {
      name: "BOARD_TEENSY35_36",
      id: 4101,
      desc: "Teensy3.5 and Teensy3.6",
    },
    {
      name: "BOARD_BEAST",
      id: 4200,
      desc: "STM32F4xxVxT6 Libmaple-based STM32F4 controller",
    },
    {
      name: "BOARD_GENERIC_STM32F4",
      id: 4201,
      desc: "STM32 STM32GENERIC-based STM32F4 controller",
    },
    {
      name: "BOARD_ARMED",
      id: 4202,
      desc: "Arm'ed STM32F4-based controller",
    },
    {
      name: "BOARD_RUMBA32_V1_0",
      id: 4203,
      desc: "RUMBA32 STM32F446VET6 based controller from Aus3D",
    },
    {
      name: "BOARD_RUMBA32_V1_1",
      id: 4204,
      desc: "RUMBA32 STM32F446VET6 based controller from Aus3D",
    },
    {
      name: "BOARD_RUMBA32_MKS",
      id: 4205,
      desc: "RUMBA32 STM32F446VET6 based controller from Makerbase",
    },
    {
      name: "BOARD_BLACK_STM32F407VE",
      id: 4206,
      desc: "BLACK_STM32F407VE",
    },
    {
      name: "BOARD_BLACK_STM32F407ZE",
      id: 4207,
      desc: "BLACK_STM32F407ZE",
    },
    {
      name: "BOARD_STEVAL_3DP001V1",
      id: 4208,
      desc: "STEVAL-3DP001V1 3D PRINTER BOARD",
    },
    {
      name: "BOARD_BTT_SKR_PRO_V1_1",
      id: 4209,
      desc: "BigTreeTech SKR Pro v1.1 (STM32F407ZG)",
    },
    {
      name: "BOARD_BTT_SKR_PRO_V1_2",
      id: 4210,
      desc: "BigTreeTech SKR Pro v1.2 (STM32F407ZG)",
    },
    {
      name: "BOARD_BTT_BTT002_V1_0",
      id: 4211,
      desc: "BigTreeTech BTT002 v1.0 (STM32F407VG)",
    },
    {
      name: "BOARD_BTT_GTR_V1_0",
      id: 4212,
      desc: "BigTreeTech GTR v1.0 (STM32F407IGT)",
    },
    {
      name: "BOARD_LERDGE_K",
      id: 4213,
      desc: "Lerdge K (STM32F407ZG)",
    },
    {
      name: "BOARD_LERDGE_S",
      id: 4214,
      desc: "Lerdge S (STM32F407VE)",
    },
    {
      name: "BOARD_LERDGE_X",
      id: 4215,
      desc: "Lerdge X (STM32F407VE)",
    },
    {
      name: "BOARD_VAKE403D",
      id: 4216,
      desc: "VAkE 403D (STM32F446VET6)",
    },
    {
      name: "BOARD_FYSETC_S6",
      id: 4217,
      desc: "FYSETC S6 board",
    },
    {
      name: "BOARD_FLYF407ZG",
      id: 4218,
      desc: "FLYF407ZG board (STM32F407ZG)",
    },
    {
      name: "BOARD_MKS_ROBIN2",
      id: 4219,
      desc: "MKS_ROBIN2 (STM32F407ZE)",
    },
    {
      name: "BOARD_THE_BORG",
      id: 5000,
      desc: "THE-BORG (Power outputs: Hotend0, Hotend1, Bed, Fan)",
    },
    {
      name: "BOARD_REMRAM_V1",
      id: 5001,
      desc: "RemRam v1",
    },
    {
      name: "BOARD_ESPRESSIF_ESP32",
      id: 6000,
      desc: "Generic ESP32",
    },
    {
      name: "BOARD_MRR_ESPA",
      id: 6001,
      desc: "MRR ESPA board based on ESP32 (native pins only)",
    },
    {
      name: "BOARD_MRR_ESPE",
      id: 6002,
      desc: "MRR ESPE board based on ESP32 (with I2S stepper stream)",
    },
    {
      name: "BOARD_E4D_BOX",
      id: 6003,
      desc: "E4d@BOX",
    },
    {
      name: "BOARD_AGCM4_RAMPS_144",
      id: 6100,
      desc: "RAMPS 1.4.4",
    },
    {
      name: "BOARD_LINUX_RAMPS",
      id: 9999,
      desc: "",
    },
  ],
};

const temperature_sensor = {
  "020006": [
    { id: -5, desc: "PT100 / PT1000 with MAX31865 (only for sensors 0-1)" },
    { id: -3, desc: "thermocouple with MAX31855 (only for sensors 0-1)" },
    { id: -2, desc: "thermocouple with MAX6675 (only for sensors 0-1)" },
    { id: -4, desc: "thermocouple with AD8495" },
    { id: -1, desc: "thermocouple with AD595" },
    { id: 0, desc: "not used" },
    {
      id: 1,
      desc: "100k thermistor - best choice for EPCOS 100k (4.7k pullup)F",
    },
    { id: 331, desc: "(3.3V scaled thermistor 1 table for MEGA)" },
    { id: 332, desc: "(3.3V scaled thermistor 1 table for DUE)" },
    { id: 2, desc: "200k thermistor - ATC Semitec 204GT-2 (4.7k pullup)" },
    { id: 202, desc: "200k thermistor - Copymaster 3D" },
    { id: 3, desc: "Mendel-parts thermistor (4.7k pullup)" },
    {
      id: 4,
      desc:
        "10k thermistor !! do not use it for a hotend. It gives bad resolution at high temp. !!",
    },
    {
      id: 5,
      desc:
        "100K thermistor - ATC Semitec 104GT-2/104NT-4-R025H42G (Used in ParCan, J-Head, and E3D) (4.7k pullup)",
    },
    { id: 501, desc: "100K Zonestar (Tronxy X3A) Thermistor" },
    {
      id: 502,
      desc: "100K Zonestar Thermistor used by hot bed in Zonestar Prusa P802M",
    },
    { id: 512, desc: "100k RPW-Ultra hotend thermistor (4.7k pullup)" },
    {
      id: 6,
      desc:
        "100k EPCOS - Not as accurate as table 1 (created using a fluke thermocouple) (4.7k pullup)",
    },
    { id: 7, desc: "100k Honeywell thermistor 135-104LAG-J01 (4.7k pullup)" },
    { id: 71, desc: "100k Honeywell thermistor 135-104LAF-J01 (4.7k pullup)" },
    { id: 8, desc: "100k 0603 SMD Vishay NTCS0603E3104FXT (4.7k pullup)" },
    { id: 9, desc: "100k GE Sensing AL03006-58.2K-97-G1 (4.7k pullup)" },
    { id: 10, desc: "100k RS thermistor 198-961 (4.7k pullup)" },
    {
      id: 11,
      desc:
        "100k beta 3950 1% thermistor (Used in Keenovo AC silicone mats and most Wanhao i3 machines) (4.7k pullup)",
    },
    {
      id: 12,
      desc:
        "100k 0603 SMD Vishay NTCS0603E3104FXT (4.7k pullup) (calibrated for Makibox hot bed)",
    },
    {
      id: 13,
      desc:
        "100k Hisens 3950  1% up to 300°C for hotend 'Simple ONE' & 'Hotend' 'All In ONE'",
    },
    { id: 15, desc: "100k thermistor calibration for JGAurora A5 hotend" },
    {
      id: 18,
      desc: "ATC Semitec 204GT-2 (4.7k pullup) Dagoma.Fr - MKS_Base_DKU001327",
    },
    {
      id: 20,
      desc:
        "Pt100 with circuit in the Ultimainboard V2.x with 5v excitation (AVR)",
    },
    {
      id: 21,
      desc:
        "Pt100 with circuit in the Ultimainboard V2.x with 3.3v excitation (STM32 \\ LPC176x....)",
    },
    {
      id: 22,
      desc:
        "100k (hotend) with 4.7k pullup to 3.3V and 220R to analog input (as in GTM32 Pro vB)",
    },
    {
      id: 23,
      desc:
        "100k (bed) with 4.7k pullup to 3.3v and 220R to analog input (as in GTM32 Pro vB)",
    },
    {
      id: 201,
      desc: "Pt100 with circuit in Overlord, similar to Ultimainboard V2.x",
    },
    { id: 60, desc: "100k Maker's Tool Works Kapton Bed Thermistor beta=3950" },
    {
      id: 61,
      desc: "100k Formbot / Vivedino 3950 350C thermistor 4.7k pullup",
    },
    { id: 66, desc: "4.7M High Temperature thermistor from Dyze Design" },
    { id: 67, desc: "450C thermistor from SliceEngineering" },
    { id: 70, desc: "the 100K thermistor found in the bq Hephestos 2" },
    {
      id: 75,
      desc:
        "100k Generic Silicon Heat Pad with NTC 100K MGB18-104F39050L32 thermistor",
    },
    {
      id: 99,
      desc:
        "100k thermistor with a 10K pull-up resistor (found on some Wanhao i3 machines) 1k ohm pullup tables - This is atypical, and requires changing out the 4.7k pullup for 1k. (but gives greater accuracy and more stable PID)",
    },
    { id: 51, desc: "100k thermistor - EPCOS (1k pullup)" },
    { id: 52, desc: "200k thermistor - ATC Semitec 204GT-2 (1k pullup)" },
    {
      id: 55,
      desc:
        "100k thermistor - ATC Semitec 104GT-2 (Used in ParCan & J-Head) (1k pullup)",
    },
    { id: 1047, desc: "Pt1000 with 4k7 pullup (E3D)" },
    { id: 1010, desc: "Pt1000 with 1k pullup (non standard)" },
    { id: 147, desc: "Pt100 with 4k7 pullup" },
    { id: 110, desc: "Pt100 with 1k pullup (non standard)" },
    {
      id: 1000,
      desc:
        "Custom - Specify parameters in Configuration_adv.h Use these for Testing or Development purposes. NEVER for production machine.",
    },
    {
      id: 998,
      desc:
        "Dummy Table that ALWAYS reads 25°C or the temperature defined below.",
    },
    {
      id: 999,
      desc:
        "Dummy Table that ALWAYS reads 100°C or the temperature defined below.",
    },
  ],
};

// Default exports
module.exports = {
  boards: boards,
  thermal_sensors: temperature_sensor,
};
