/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '重庆',
  CITY: '重庆',
  
  TIAN_API: {
  // 天行API KEY，如果使用天行API则需要填写此项
  key: '6d6f8b22713f61d34c1969d74c302ced',

  /** 天行API相关，需要config中配置 TIAN_API_KEY  */
  // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
  morningGreeting: true,

  // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
  eveningGreeting: true,

  // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
  eveningGreeting: true,

  // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
  weather: 3,

  // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
  networkHot: 30,

  // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
  networkHotType: 'default',
},

  USERS: [
    {
      // 想要发送的人的名字
      name: '小蒋',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16759TuzRYYqpl88mVY3VQZv28XbkiP8n0ZiG5',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小徐', year: '1995', date: '06-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '李四', year: '1996', date: '09-31',
//         },
//         {
//           type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
//         },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-12-26' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '小徐',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16760TpYNxKXeR3JHqSgAlQEu47MrQMgdMV89P',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小蒋', year: '1995', date: '05-12',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '李四', year: '1996', date: '09-31',
//         },
//         {
//           type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
//         },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-12-26' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: 'BB',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU17293Th1n7IMC3I12HIh8OCFTbGhnqG1DKyKQK',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0002',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-13',
      province: '湖北',
      // 所在城市或县区
      city: '武汉',
      festivals: [],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [],
    },
    {
      // 想要发送的人的名字
      name: '小刘老师',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU17294TyHevE4D4by1fbWMjQdxBHkF1Vi1wfoNp',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0002',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-12',
      province: '上海',
      // 所在城市或县区
      city: '上海',
      festivals: [],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [],
    },
        {
      // 想要发送的人的名字
      name: '小戴老师',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU17292TKggJouNxeGsah0wEBVEgEAnmjuda3J2B',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0002',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-10',
      province: '浙江',
      // 所在城市或县区
      city: '杭州',
      festivals: [],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [],
    },
    {
      // 想要发送的人的名字
      name: '小王老师',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU17296TzBRaBybYl6XZyZCnlH6UTbiZ83yI1Qne',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0002',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-16',
      province: '山东',
      // 所在城市或县区
      city: '日照',
      festivals: [],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG
