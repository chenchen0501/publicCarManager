let roleRes = {
  code: '00000',
  message: 'success',
  data: {
    name: 'admin'
  }
}

export default {
  // 'get|/api/staff': option => {
  //   return {
  //     status: 200,
  //     message: 'success',
  //     data: {}
  //   }
  // },
  'get|/api/staff/getRole': roleRes
}
