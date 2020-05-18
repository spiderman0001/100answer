/*----------------------------------------Vue------------------------------------*/
function Vue() {}
/*----------------------------------------测试代码------------------------------------*/
// 调用
let data = {
	name: 'Hello'
};
let computed = {
	getfullname: function() {
		console.log('-----走了computed 之 getfullname------');
		console.log('新的值为：' + data.name + ' - world');
		return data.name + ' - world';
	}
};
let vue = new Vue();
vue.data = data;
let updateComponent = (vm) => {
	// 收集依赖
	data.name;
};
let watcher1 = new Watcher(vue, updateComponent, () => {});
observe(data);
let watvher2 = new initComputed(vue, computed);

//测试 浏览器console中相继运行一下代码测试
// data.name ='1'
data.name
// vue.getfullname;
// vue.getfullname;
// data.name = 'Hi';
// vue.getfullname;
// vue.getfullname;
