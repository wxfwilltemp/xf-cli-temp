import ReactDom from 'react-dom';
import RouterFn from './router/index';

// 汉化包 分页组件出现英文
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
// antd样式
import 'antd/dist/antd.css';
// 全局css
import './main.css';
// redux
import { Provider } from 'react-redux';
import store from './store/index';
// 持久化
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './store/index';
// ajax
import api from './http/index';
// 挂载全局
window.http = api;

const App = (): any => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={zh_CN}>
          <RouterFn />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDom.render(<App></App>, document.getElementById('root'));
