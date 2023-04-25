// 封装request请求，配合api文件夹可以让pages页的代码更加简洁，更加条理清晰。
// baseURL
const baseURL = 'https://tea.qingnian8.com';

export function request(params){
  let dataObj = params.data || {};
  // 固定请求头
  let headerObj = {			
    'content-type': 'application/json'    
  }
  
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + params.url,
      method:params.method || "GET",
      data:dataObj,
      header:headerObj,
      success:res=>{
        if(res.data.errCode!=0){
          reject(res.data);
          wx.showToast({
            title: res.data.errMsg,
            mask:true,
            icon:"error"
          })
          return;
        }
        resolve(res.data)
      },
      fail:err=>{
        reject(err)
      }
    })
  })
}