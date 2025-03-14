# 使用指南

## 权限管理

要使用 Web SCADA 功能，用户需要被添加到相应的权限组中：

1. 进入 Odoo 设置菜单
2. 选择 "用户和公司" > "用户"
3. 找到需要授权的用户并点击编辑
4. 在访问权限标签页中，找到 "Web SCADA / SCADA Manager" 组
5. 勾选该权限组
6. 点击保存按钮完成设置

只有被添加到 SCADA Manager 组的用户才能进行页面的创建、编辑和管理操作。

## 页面管理

### 创建新页面

1. 在 Odoo 顶部导航菜单中找到并点击 "web_SCADA" 模块
2. 在列表视图中点击 "创建" 按钮（Create）
![创建页面](./new_page.png)
3. 在表单视图中填写以下信息：
   - 页面名称：为您的 SCADA 页面输入一个名称作为唯一标识
   - 其他字段（根据实际配置填写）
4. 点击 "保存"（Save）按钮完成创建
5. 现在，您可以开始[编辑页面内容](./usage/ui-introduction)了。

### 页面启用控制

页面创建后默认处于非启用状态。如需启用某个页面，可以切换 enabled 字段开关。未启用的页面将不会进行展示。
![启用页面](./enabled_switch.png)

### 注意事项

- 所有修改都需要点击保存按钮才能生效
- 建议定期保存编辑内容，避免意外丢失