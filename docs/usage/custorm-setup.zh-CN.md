---
order: 10
---
# 自定义渲染

Web SCADA 支持自定义画布的渲染逻辑。你可以通过以下步骤来实现自定义渲染：

## 1. 配置资源文件

首先在 `__manifest__.py` 文件中添加自定义的 JavaScript 文件：
```python
{
    'assets': {
        'scada.common_assets': [
            'xxx/static/src/xxx.js',
        ],
    },
}
```


## 2. 实现自定义渲染逻辑

在 `extra.js` 文件中，通过 `window._scada.setup` 函数来实现自定义渲染：
```javascript
(function () {
    window._scada = {
        setup: function ({ bus, page, setChildren }) {
            console.log(bus);
            console.log(page);
            console.log("setup");
            
            setChildren([
            {
                key: "unique_key", // 组件唯一标识
                component: YourComponent, // 自定义组件
                className: "page-child1", // 组件 CSS 类名
                props: { // 组件属性
                // ... 其他属性
                }
            },
            // ... 可添加多个组件
            ]);
        },
    };
})();
```