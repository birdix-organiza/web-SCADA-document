---
order: 10
---
# Custom Rendering

Web SCADA supports customizing canvas rendering logic. You can implement custom rendering through the following steps:

## 1. Configure Resource Files

First, add your custom JavaScript files in the `__manifest__.py` file:
```python
{
    'assets': {
        'scada.common_assets': [
            'xxx/static/src/xxx.js',
        ],
    },
}
```

## 2. Implement Custom Rendering Logic

In the `extra.js` file, implement custom rendering through the `window._scada.setup` function:
```javascript
(function () {
    window._scada = {
        setup: function ({ bus, page, setChildren }) {
            console.log(bus);
            console.log(page);
            console.log("setup");
            
            setChildren([
            {
                key: "unique_key", // Component unique identifier
                component: YourComponent, // Custom component
                className: "page-child1", // Component CSS class name
                props: { // Component properties
                // ... other properties
                }
            },
            // ... can add multiple components
            ]);
        },
    };
})();
``` 