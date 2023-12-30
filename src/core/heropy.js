// Component
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    //...
  }
}

//Router
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/"); //히스토리에 기록 남기지않고, /#/ 해시 정보가 없을 떄 넣어줌
  }

  const routerView = document.querySelector("router-view");
  // httpL//localhost:1234/#/about?name=heropy
  // #/about 가 필요
  const [hash, queryString = ""] = location.hash.split("?");

  // a=123&b=456
  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  history.replaceState(query, "");// (상태, 제목)

  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0); //스크롤 최상단으로 이동
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

///Store
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {}; //빈 객체 생성
    for (const key in state) {
      // 정의하고자하는 데이터들의 새로운 값들이 할당될때마다 필요한 함수를 실행하기 위해
      Object.defineProperty(this.state, key, {
        get: () => {
          return state[key];
        },
        set: (val) => {
          state[key] = val;
          //observer는 cb의 값
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }
  //상태 구독
  subscribe(key, cb) {
    // 어떤 데이터를 감시할 것이고(key), 변화하면 cb라는 함수 실행
    // this.observers['message'] = () => {}
    // { message : () => {} }
    // version2 { message : [() => {}, ()=> {}, () => {}]} 메세지의 객체를 여러개 만들어주기 위해 배열 데이터 생성
    // push값은 배열 데이터에서만 사용 가능
    // Array.isArray()를 통해서 인자값이 배열데이터라면 ? 뒤를 실행하고 아니라면 : 뒤를 실행한다.
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}

// subscribe()는 인자를 2개 받는데 message의 값과 callback 함수이다.
// message.js의 Store객체의 값이 message로 변경될때마다 get, set 함수를 실행한다
// get으로는 state[key]값을 받아오고 set으로 state[key]값을 val로 설정하고 cb함수를 실행한다.
// 다시 Message.js로 가보자
