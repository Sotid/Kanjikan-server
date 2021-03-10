const mongoose = require("mongoose");
const Lesson = require("../models/lesson.model");
require("dotenv").config();

const lesson = [
  {
    name: "Lesson 1",
    img: "",
    kanji: [
      {
        kanji: "右",
        grade: 1,
        stroke_count: 5,
        meanings: "right",
        kun_readings: "みぎ",
        on_readings: "ウ, ユウ",
        name_readings: "あき, すけ",
        heisig_en: "right",
      },
      {
        kanji: "雨",
        grade: 1,
        stroke_count: 8,
        meanings: "rain",
        kun_readings: "あめ, あま-, -さめ",
        on_readings: "ウ",
        name_readings: "",
        heisig_en: "rain",
      },
      {
        kanji: "円",
        grade: 1,
        stroke_count: 4,
        meanings: "circle, yen, round",
        kun_readings: "まる.い, まる, まど, まど.か, まろ.やか",
        on_readings: "エン",
        name_readings: "つぶら, のぶ, まどか, みつ",

        heisig_en: "circle",
      },
      {
        kanji: "王",
        grade: 1,
        stroke_count: 4,
        meanings: "king, rule, magnate",
        kun_readings: "",
        on_readings: "オウ, -ノウ",
        name_readings: "おお, おおきみ, わ",
        heisig_en: "king",
      },
      {
        kanji: "音",
        grade: 1,
        stroke_count: 9,
        meanings: "sound, noise",
        kun_readings: "おと, ね",
        on_readings: "オン, イン, -ノン",
        name_readings: "お, と",
        heisig_en: "sound",
      },
      {
        kanji: "下",
        grade: 1,
        stroke_count: 3,
        meanings: "below, down, descend, give, low, inferior",
        kun_readings:
          "した, しも, もと, さ.げる, さ.がる, くだ.る, くだ.り, くだ.す, -くだ.す, くだ.さる, お.ろす, お.りる",
        on_readings: "カ, ゲ",
        name_readings: "さか, しと",

        heisig_en: "below",
      },

      {
        kanji: "火",
        grade: 1,
        stroke_count: 4,
        meanings: "fire",
        kun_readings: "ひ, -び, ほ-",
        on_readings: "カ",
        name_readings: "",
        heisig_en: "fire",
      },
      {
        kanji: "花",
        grade: 1,
        stroke_count: 7,
        meanings: "flower",
        kun_readings: "はな",
        on_readings: "カ, ケ",
        name_readings: "わ",
        heisig_en: "flower",
      },
      {
        kanji: "学",
        grade: 1,
        stroke_count: 8,
        meanings: "study, learning, science",
        kun_readings: "まな.ぶ",
        on_readings: "ガク",
        name_readings: "たか, のり",
        heisig_en: "study",
      },
      {
        kanji: "気",
        grade: 1,
        stroke_count: 6,
        meanings: "spirit, mind, air, atmosphere, mood",
        kun_readings: "いき",
        on_readings: "キ, ケ",
        name_readings: "",
        heisig_en: "spirit",
      },
    ],
  },

  {
    name: "Lesson 2",
    img: "",
    kanji: [
      {
        kanji: "休",
        grade: 1,
        stroke_count: 6,
        meanings: "rest, day off, retire, sleep",
        kun_readings: "やす.む, やす.まる, やす.める",
        on_readings: "キュウ",
        name_readings: "",
        heisig_en: "rest",
      },
      {
        kanji: "玉",
        grade: 1,
        stroke_count: 5,
        meanings: "jewel, ball",
        kun_readings: "たま, たま-, -だま",
        on_readings: "ギョク",
        name_readings: "おう, だん",
        heisig_en: "jewel",
      },
      {
        kanji: "金",
        grade: 1,
        stroke_count: 8,
        meanings: "gold",
        kun_readings: "かね, かな-, -がね",
        on_readings: "キン, コン, ゴン",
        name_readings: "かん, きむ, こ, この, ん",
        heisig_en: "gold",
      },
      {
        kanji: "九",
        grade: 1,
        stroke_count: 2,
        meanings: "nine",
        kun_readings: "ここの, ここの.つ",
        on_readings: "キュウ, ク",
        name_readings: "いちじく, いちのく, この, ひさし",
        heisig_en: "nine",
      },
      {
        kanji: "空",
        grade: 1,
        stroke_count: 8,
        meanings: "empty, sky, void, vacant, vacuum",
        kun_readings:
          "そら, あ.く, あ.き, あ.ける, から, す.く, す.かす, むな.しい",
        on_readings: "クウ",
        name_readings: "うつ, き, く",
        heisig_en: "empty",
      },
      {
        kanji: "月",
        grade: 1,
        stroke_count: 4,
        meanings: "month, moon",
        kun_readings: "つき",
        on_readings: "ゲツ, ガツ",
        name_readings: "おと, がっ, す, ずき, もり",

        heisig_en: "month",
      },
      {
        kanji: "犬",
        grade: 1,
        stroke_count: 4,
        meanings: "dog",
        kun_readings: "いぬ, いぬ-",
        on_readings: "ケン",
        name_readings: "",
        heisig_en: "dog",
      },
      {
        kanji: "見",
        grade: 1,
        stroke_count: 7,
        meanings: "see, hopes, chances, idea, opinion, look at, visible",
        kun_readings: "み.る, み.える, み.せる",
        on_readings: "ケン",
        name_readings: "",
        heisig_en: "see",
      },
      {
        kanji: "五",
        grade: 1,
        stroke_count: 4,
        meanings: "five",
        kun_readings: "いつ, いつ.つ",
        on_readings: "ゴ",
        name_readings: "い, さ, さつ, ち, ふ, み, め",

        heisig_en: "five",
      },
      {
        kanji: "口",
        grade: 1,
        stroke_count: 3,
        meanings: "mouth",
        kun_readings: "くち",
        on_readings: "コウ, ク",
        name_readings: "",
        heisig_en: "mouth",
      },
    ],
  },

  {
    name: "Lesson 3",
    img: "",
    kanji: [
      {
        kanji: "校",
        grade: 1,
        stroke_count: 10,
        meanings: "exam, school, printing, proof, correction",
        kun_readings: "",
        on_readings: "コウ, キョウ",
        name_readings: "めん",
        heisig_en: "exam",
      },
      {
        kanji: "左",
        grade: 1,
        stroke_count: 5,
        meanings: "left",
        kun_readings: "ひだり",
        on_readings: "サ, シャ",
        name_readings: "そ",
        heisig_en: "left",
      },
      {
        kanji: "山",
        grade: 1,
        stroke_count: 3,
        meanings: "mountain",
        kun_readings: "やま",
        on_readings: "サン, セン",
        name_readings: "さ, やの, やん",
        heisig_en: "mountain",
      },
      {
        kanji: "子",
        grade: 1,
        stroke_count: 3,
        meanings:
          "child, sign of the rat, 11PM-1AM, first sign of Chinese zodiac",
        kun_readings: "こ, -こ, ね",
        on_readings: "シ, ス, ツ",
        name_readings: "い, き, ぎ, く, け, ねっ",
        heisig_en: "child",
      },
      {
        kanji: "糸",
        grade: 1,
        stroke_count: 6,
        meanings: "thread",
        kun_readings: "いと",
        on_readings: "シ",
        name_readings: "",
        heisig_en: "thread",
      },
      {
        kanji: "字",
        grade: 1,
        stroke_count: 6,
        meanings: "character, letter, word, section of village",
        kun_readings: "あざ, あざな, -な",
        on_readings: "ジ",
        name_readings: "",
        heisig_en: "character",
      },

      {
        kanji: "耳",
        grade: 1,
        stroke_count: 6,
        meanings: "ear",
        kun_readings: "みみ",
        on_readings: "ジ",
        name_readings: "がみ",
        heisig_en: "ear",
      },
      {
        kanji: "七",
        grade: 1,
        stroke_count: 2,
        meanings: "seven",
        kun_readings: "なな, なな.つ, なの",
        on_readings: "シチ",
        name_readings: "し, しっ, な, ひち",
        heisig_en: "seven",
      },
      {
        kanji: "車",
        grade: 1,
        stroke_count: 7,
        meanings: "car",
        kun_readings: "くるま",
        on_readings: "シャ",
        name_readings: "くら, くろま",
        heisig_en: "car",
      },

      {
        kanji: "手",
        grade: 1,
        stroke_count: 4,
        meanings: "hand",
        kun_readings: "て, て-, -て, た-",
        on_readings: "シュ, ズ",
        name_readings: "",
        heisig_en: "hand",
      },
    ],
  },

  {
    name: "Lesson 4",
    img: "",
    kanji: [
      {
        kanji: "十",
        grade: 1,
        stroke_count: 2,
        meanings: "ten",
        kun_readings: "とお, と",
        on_readings: "ジュウ, ジッ, ジュッ",
        name_readings: "い, か, ぎ, さ, し, そ, そう, ち",
        heisig_en: "ten",
      },
      {
        kanji: "女",
        grade: 1,
        stroke_count: 3,
        meanings: "woman, female",
        kun_readings: "おんな, め",
        on_readings: "ジョ, ニョ, ニョウ",
        name_readings: "おな, た, つき, な",

        heisig_en: "woman",
      },
      {
        kanji: "小",
        grade: 1,
        stroke_count: 3,
        meanings: "little, small",
        kun_readings: "ちい.さい, こ-, お-, さ-",
        on_readings: "ショウ",
        name_readings: "いさら, こう, さざ, しゃお, ちいさ",

        heisig_en: "little",
      },
      {
        kanji: "上",
        grade: 1,
        stroke_count: 3,
        meanings: "above, up",
        kun_readings:
          "うえ, -うえ, うわ-, かみ, あ.げる, あ.がる, あ.がり ,のぼ.る, たてまつ.る",
        on_readings: "ジョウ, ショウ, シャン",
        name_readings:
          "あおい, あげ, い, か, かき, かず, かん, こう, のぼり, ほつ",
        heisig_en: "above",
      },
      {
        kanji: "森",
        grade: 1,
        stroke_count: 12,
        meanings: "forest, woods",
        kun_readings: "もり",
        on_readings: "シン",
        name_readings: "もと",
        heisig_en: "forest",
      },
      {
        kanji: "人",
        grade: 1,
        stroke_count: 2,
        meanings: "person",
        kun_readings: "ひと, -り, -と",
        on_readings: "ジン, ニン",
        name_readings: "じ, と, ね, ひこ, ふみ",

        heisig_en: "person",
      },
      {
        kanji: "水",
        grade: 1,
        stroke_count: 4,
        meanings: "water",
        kun_readings: "みず, みず-",
        on_readings: "スイ",
        name_readings: "うず, ずみ, つ, ど, み, みさ, みな, みん",
        heisig_en: "water",
      },
      {
        kanji: "生",
        grade: 1,
        stroke_count: 5,
        meanings: "life, genuine, birth",
        kun_readings:
          "い.きる, い.かす, い.ける, う.まれる, う.まれ, な.す, む.す",
        on_readings: "セイ, ショウ",
        name_readings:
          "あさ, いき, いく, うぶ, うまい, え, おい, くるみ, ごせ, さ",

        heisig_en: "life",
      },
      {
        kanji: "青",
        grade: 1,
        stroke_count: 8,
        meanings: "blue, green",
        kun_readings: "あお, あお-, あお.い",
        on_readings: "セイ, ショウ",
        name_readings: "お",
        heisig_en: "blue",
      },
      {
        kanji: "石",
        grade: 1,
        stroke_count: 5,
        meanings: "stone",
        kun_readings: "いし",
        on_readings: "セキ, シャク, コク",
        name_readings: "いさ, いす, いわ, し, せっく, と",
        heisig_en: "stone",
      },
    ],
  },

  {
    name: "Lesson 5",
    img: "",
    kanji: [
      {
        kanji: "赤",
        grade: 1,
        stroke_count: 7,
        meanings: "red",
        kun_readings: "あか, あか-, あか.い, あか.らむ, あか.らめる",
        on_readings: "セキ, シャク",
        name_readings: "あ, あこ, あま",

        heisig_en: "red",
      },
      {
        kanji: "先",
        grade: 1,
        stroke_count: 6,
        meanings: "before, ahead, previous, future, precedence",
        kun_readings: "さき, ま.ず",
        on_readings: "セン",
        name_readings: "ぽん",

        heisig_en: "before",
      },
      {
        kanji: "千",
        grade: 1,
        stroke_count: 3,
        meanings: "thousand",
        kun_readings: "ち",
        on_readings: "セン",
        name_readings: "かず, ゆき",

        heisig_en: "thousand",
      },
      {
        kanji: "川",
        grade: 1,
        stroke_count: 3,
        meanings: "stream, river",

        kun_readings: "かわ",
        on_readings: "セン",
        name_readings: "か, こ, さわ",
        heisig_en: "stream",
      },
      {
        kanji: "早",
        grade: 1,
        stroke_count: 6,
        meanings: "early, fast",
        kun_readings: "はやい, はや, はや-, はや.まる, はや.める, さ-",
        on_readings: "ソウ, サッ",
        name_readings: "さか, さわ, そ, わ",
        heisig_en: "early",
      },
      {
        kanji: "草",
        grade: 1,
        stroke_count: 9,
        meanings: "grass, weeds, herbs, pasture, write, draft",
        kun_readings: "くさ, くさ-, -ぐさ",
        on_readings: "ソウ",
        name_readings: "そ, や",
        heisig_en: "grass",
      },
      {
        kanji: "足",
        grade: 1,
        stroke_count: 7,
        meanings: "leg, foot, be sufficient, counter for pairs of footwear",
        kun_readings: "あし, た.りる, た.る, た.す",
        on_readings: "ソク",
        name_readings: "あ, あす, おす, たらし",
        heisig_en: "leg",
      },
      {
        kanji: "村",
        grade: 1,
        stroke_count: 7,
        meanings: "village, town",
        kun_readings: "むら",
        on_readings: "ソン",
        name_readings: "え, むた, ら",
        heisig_en: "town",
      },
      {
        kanji: "大",
        grade: 1,
        stroke_count: 3,
        meanings: "large, big",
        kun_readings: "おお-, おお.きい, -おお.いに",
        on_readings: "ダイ, タイ",
        name_readings: "うふ, お, おう, た, たかし, とも, はじめ",
        heisig_en: "large",
      },
      {
        kanji: "竹",
        grade: 1,
        stroke_count: 6,
        meanings: "bamboo",
        kun_readings: "たけ",
        on_readings: "チク",
        name_readings: "たか",
        heisig_en: "bamboo",
      },
    ],
  },

  {
    name: "Lesson 6",
    img: "",
    kanji: [
      {
        kanji: "中",
        grade: 1,
        stroke_count: 4,
        meanings: "in, inside, middle, mean, center",
        kun_readings: "なか, うち, あた.る",
        on_readings: "チュウ",
        name_readings: "あたる, かなえ",

        heisig_en: "in",
      },
      {
        kanji: "虫",
        grade: 1,
        stroke_count: 6,
        meanings: "insect, bug, temper",
        kun_readings: "むし",
        on_readings: "チュウ, キ",
        name_readings: "む",
        heisig_en: "insect",
      },
      {
        kanji: "町",
        grade: 1,
        stroke_count: 7,
        meanings: "town, village, block, street",
        kun_readings: "まち",
        on_readings: "チョウ",
        name_readings: "",
        heisig_en: "village",
      },
      {
        kanji: "天",
        grade: 1,
        stroke_count: 4,
        meanings: "heavens, sky, imperial",
        kun_readings: "あまつ, あめ, あま-",
        on_readings: "テン",
        name_readings: "あき, あも, た, たかし, て, なま",
        heisig_en: "heavens",
      },

      {
        kanji: "田",
        grade: 1,
        stroke_count: 5,
        meanings: "rice field, rice paddy",
        kun_readings: "た",
        on_readings: "デン",
        name_readings: "いなか, おか, たん, で, とう, や",
        heisig_en: "rice field",
      },
      {
        kanji: "土",
        grade: 1,
        stroke_count: 3,
        meanings: "soil, earth, ground, Turkey",
        kun_readings: "つち",
        on_readings: "ド, ト",
        name_readings: "つ, つく, は, ひじ",
        heisig_en: "soil",
      },
      {
        kanji: "二",
        grade: 1,
        stroke_count: 2,
        meanings: "two, two radical (no. 7)",
        kun_readings: "ふた, ふた.つ, ふたたび",
        on_readings: "ニ, ジ",
        name_readings: "おと, つぐ, つぎ, にい, は, ふ, ふたつ, ふだ, わ",
        heisig_en: "two",
      },
      {
        kanji: "日",
        grade: 1,
        stroke_count: 4,
        meanings: "day, sun, Japan, counter for days",
        kun_readings: "ひ, -び, -か",
        on_readings: "ニチ, ジツ",
        name_readings:
          "あ,あき,いる,く,くさ, こう, す, たち, に, にっ, につ,へ",
        heisig_en: "day",
      },
      {
        kanji: "入",
        grade: 1,
        stroke_count: 2,
        meanings: "enter, insert",
        kun_readings: "い.る, -い.る, -い.り, い.れる, はい.る",
        on_readings: "ニュウ, ジュ",
        name_readings: "いり, いる, に, の, りり",
        heisig_en: "enter",
      },
      {
        kanji: "年",
        grade: 1,
        stroke_count: 6,
        meanings: "year, counter for years",
        kun_readings: "とし",
        on_readings: "ネン",
        name_readings: "ね",
        heisig_en: "year",
      },
    ],
  },

  {
    name: "Lesson 7",
    img: "",
    kanji: [
      {
        kanji: "白",
        grade: 1,
        stroke_count: 5,
        meanings: "white",
        kun_readings: "しろ, しら-, しろ.い",
        on_readings: "ハク, ビャク",
        name_readings: "あき, か, はっ",
        heisig_en: "white",
      },
      {
        kanji: "八",
        grade: 1,
        stroke_count: 2,
        meanings: "eight, eight radical (no. 12)",
        kun_readings: "や, や.つ, やっ.つ, よう",
        on_readings: "ハチ",
        name_readings: "な, は, はっ, はつ, やち, やつ",
        heisig_en: "eight",
      },
      {
        kanji: "百",
        grade: 1,
        stroke_count: 6,
        meanings: "hundred",
        kun_readings: "もも",
        on_readings: "ヒャク, ビャク",
        name_readings: "お, ど, どう, なり, ひゃっ, ひゅく, も, もんど, ゆ",
        heisig_en: "hundred",
      },
      {
        kanji: "文",
        grade: 1,
        stroke_count: 4,
        meanings: "sentence, literature, style, art, decoration, figures, plan",
        kun_readings: "ふみ, あや",
        on_readings: "ブン, モン",
        name_readings: "かざり, ふ, も",
        heisig_en: "sentence",
      },
      {
        kanji: "本",
        grade: 1,
        stroke_count: 5,
        meanings: "book, present, main, origin, true, real",
        kun_readings: "もと",
        on_readings: "ホン",
        name_readings: "まと, ごう",
        heisig_en: "book",
      },
      {
        kanji: "名",
        grade: 1,
        stroke_count: 6,
        meanings: "name, noted, distinguished, reputation",
        kun_readings: "な, -な",
        on_readings: "メイ, ミョウ",
        name_readings: "と",
        heisig_en: "name",
      },
      {
        kanji: "木",
        grade: 1,
        stroke_count: 4,
        meanings: "tree, wood",
        kun_readings: "き, こ-",
        on_readings: "ボク, モク",
        name_readings: "ぐ, も, もと",
        heisig_en: "tree",
      },
      {
        kanji: "目",
        grade: 1,
        stroke_count: 5,
        meanings: "eye, class, look, insight, experience, care, favor",
        kun_readings: "め, -め, ま-",
        on_readings: "モク, ボク",
        name_readings: "さかん, さがん, さっか, さつか",
        heisig_en: "eye",
      },
      {
        kanji: "夕",
        grade: 1,
        stroke_count: 3,
        meanings: "evening",
        kun_readings: "ゆう",
        on_readings: "セキ",
        name_readings: "ゆ",
        heisig_en: "evening",
      },
      {
        kanji: "立",
        grade: 1,
        stroke_count: 5,
        meanings: "stand up, rise, set up, erect",
        kun_readings: "た.つ, -た.つ, た.ち-, た.てる, -た.てる",
        on_readings: "リツ, リュウ, リットル",
        name_readings: "たち, たっ, たつ, だて, つい",
        heisig_en: "stand up",
      },
    ],
  },

  {
    name: "Lesson 8",
    img: "",
    kanji: [
      {
        kanji: "力",
        grade: 1,
        stroke_count: 2,
        meanings: "power, strength, strong, strain, bear up, exert",
        kun_readings: "ちから",
        on_readings: "リョク, リキ, リイ",
        name_readings: "じから, つとむ",
        heisig_en: "power",
      },
      {
        kanji: "林",
        grade: 1,
        stroke_count: 8,
        meanings: "grove, forest",
        kun_readings: "はやし",
        on_readings: "リン",
        name_readings: "し",
        heisig_en: "grove",
      },
      {
        kanji: "六",
        grade: 1,
        stroke_count: 4,
        meanings: "six",
        kun_readings: "む, む.つ, むっ.つ, むい",
        on_readings: "ロク, リク",
        name_readings: "く, むつ, ろっ, ろつ",
        heisig_en: "six",
      },

      {
        kanji: "豉",
        grade: 1,
        stroke_count: 11,
        meanings: "fermented beans",
        kun_readings: "みそ",
        on_readings: "シ",
        name_readings: "",
        heisig_en: null,
      },

      {
        kanji: "園",
        grade: 1,
        stroke_count: 13,
        meanings: "park, garden, yard, farm",
        kun_readings: "その",
        on_readings: "エン",
        name_readings: "おん, ぞの",
        heisig_en: "park",
      },

      {
        kanji: "遠",
        grade: 2,
        stroke_count: 13,
        meanings: "distant, far",
        kun_readings: "とお.い",
        on_readings: "エン, オン",
        name_readings: "お, おに, ど, どお",
        heisig_en: "distant",
      },
      {
        kanji: "黄",
        grade: 2,
        stroke_count: 11,
        meanings: "yellow",
        kun_readings: "き,こ-",
        on_readings: "コウ, オウ",
        name_readings: "うい, れい",
        heisig_en: "yellow",
      },
      {
        kanji: "何",
        grade: 2,
        stroke_count: 7,
        meanings: "what",
        kun_readings: "なに, なん, なに-, なん-",
        on_readings: "カ",
        name_readings: "あが",
        heisig_en: "what",
      },
      {
        kanji: "家",
        grade: 2,
        stroke_count: 10,
        meanings: "house, home, family, professional, expert",
        kun_readings: "いえ, や, うち",
        on_readings: "カ, ケ",
        name_readings: "あり, え, く, つ か, べ ",
        heisig_en: "house",
      },
      {
        kanji: "会",
        grade: 2,
        stroke_count: 6,
        meanings: "meeting, meet, party, association, interview, join",
        kun_readings: "あ.う, あ .わせる, あ, つ.まる",
        on_readings: "カイ, エ",
        name_readings: "あい, い",
        heisig_en: "meeting",
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(() => {
    const pr = Lesson.create(lesson);

    return pr;
  })
  .then((createdLessons) => {
    console.log(
      `${createdLessons.length} lessons have been created in our Databse`
    );

    mongoose.connection.close();
  })
  .catch((err) => console.log("Error connection to the DB", err));
