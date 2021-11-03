/*
 * @Author: will
 * @Date: 2021-07-30 16:36:38
 * @LastEditTime: 2021-11-02 17:45:50
 * @LastEditors: will
 * @Description: router
 */
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routerArr';
import { connect } from 'react-redux';
import { saveToken } from '@/store/actions/userAction';

const RouterFn = () => {
  let token: any = 123;
  let baseName = process.env.NODE_ENV === 'development' ? '/' : '/dist/';
  return (
    <BrowserRouter basename={baseName}>
      <div className="app-wrap">
        <Switch>
          {routes.map((item) => {
            return (
              <Route
                key={item.path + item.auth}
                path={item.path}
                exact
                render={(props: any) => {
                  if (!item.auth) {
                    return item.path === '/' ? (
                      <Redirect to="/login" />
                    ) : (
                      <item.component {...props} />
                    );
                  }
                  return token ? <item.component {...props} /> : <Redirect to="/login" />;
                }}
              />
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const stateProps = (state: any) => {
  return {
    token: state?.userReducer?.token,
  };
};

const actionToProps = (dispatch: any) => ({
  setToken: (token: string) => dispatch(saveToken(token)),
});

export default connect(stateProps, actionToProps)(RouterFn);
