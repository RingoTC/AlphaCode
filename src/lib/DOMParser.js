const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// 假设您的HTML代码存储在这个变量中
let htmlString = `<div className="bg-white p-6 rounded-lg shadow-md">
<h1 className="text-2xl font-bold mb-4">Login</h1>
<p className="text-gray-600 mb-6">Enter your email below to login to your account.</p>
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="email"
    type="email"
    placeholder="m@example.com"
  />
</div>
<div className="mb-6">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="password"
    type="password"
    placeholder="Enter your password"
  />
</div>
<div className="flex justify-center">
  <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
    Login
  </button>
</div>
</div>`;

// 使用JSDOM解析HTML字符串
const dom = new JSDOM(htmlString);

// 获取document对象
const document = dom.window.document;

// 初始化一个变量来存储当前的ID值
let currentId = 0;

// 获取所有元素
const elements = document.querySelectorAll('*');

// 遍历每个元素并添加data-id属性
elements.forEach(element => {
  element.setAttribute('data-id', currentId++);
});

// 将更新后的HTML导出为字符串
const updatedHtmlString = document.body.innerHTML;

// 输出结果
console.log(updatedHtmlString);
