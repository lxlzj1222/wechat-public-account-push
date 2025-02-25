/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx20f44ebdce153c61',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '28f61a11ef4a5e2e17ef42b80775d22f',

  PROVINCE: '湖南',
  CITY: '长沙',

  USERS: [
    {
      // 想要发送的人的名字
      name: '紫骏',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEqtU6qYr69TVpVAls3LHQI2HGe0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'I9shgyaV4pX6omeYeXW5R5qKK9JIyuTCdnJx6kAnJ2I',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '紫骏', year: '2002', date: '09-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '紫骏', year: '2002', date: '10-27',
        },
        {
          type: '节日', name: '相识纪念日', year: '2017', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-12-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2020-02-24' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'I9shgyaV4pX6omeYeXW5R5qKK9JIyuTCdnJx6kAnJ2I',

  CALLBACK_USERS: [
    {
      name: '李璇',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEqtU6s0RvCgRC2rC_CLqf3NRpLA',
    }
  ],

}

module.exports = USER_CONFIG

