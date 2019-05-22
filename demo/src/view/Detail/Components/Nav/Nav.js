import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";

const Description = styled.section``;
const Column = styled.div``;

const Apis = styled.section`
  padding-top: 20px;
  width: 100%;
  clear: both;
  table {
    width: 100%;
  }
  td {
    padding: 4px 6px;
  }
`;

class Nav extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "常规使用",
        code: `import React, { Component } from "react";
import { Nav, Btn1 } from "@es";
import { ReactComponent as Home } from "@es/static/medias/svg/home.svg";

const navList = [
  {
    content: [<Home key={'home'} />, "首页"],
    id: "home1"
  },
  {
    content: [<Home key={'1'} />,"1级常规下拉"],
    id: "home2",
    subList: [
      {
        content: <div>常规下拉子项</div>,
        id: "home21"
      },
      {
        content: <div>2级下拉1</div>,
        id: "home22",
        subList: [
          { content: <div>111</div>, id: "x1" },
          { content: <div>222</div>, id: "x2" },
          { content: <div>333</div>, id: "x3" }
        ]
      },
      {
        content: <div>2级下拉2</div>,
        id: "home23",
        subList: [
          { content: <div>111</div>, id: "y1" },
          { content: <div>222</div>, id: "y2" },
          { content: <div>333</div>, id: "y3" }
        ]
      }
    ]
  }
]
class Demo1 extends Component {
  state = {
    arrow: true
  };
  changeHandle = (id, data) => {
    alert('切换到了id:'+id )
    return false;
  };
  iconChange = e => {
    this.setState({
      arrow: !this.state.arrow
    });
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.iconChange}>
          点击切换controlIconType, 当前：
          {this.state.arrow ? "arrow" : "delta"}
        </Btn1>
        <br />
        <br />
        <Nav
          controlIconType={this.state.arrow ? "arrow" : "delta"}
          defaultActiveId="home1"
          onChange={this.changeHandle}
          navList={navList}
        />
      </div>
    );
  }
}`
      }
    ];

    return (
      <DetailTemp title={"Nav"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 左侧导航组件
            <br />
            2. 通常配合layout 和 header组件共同使用
          </p>
        </Description>
        <Column className={"demo-column"}>
          {demoList
            .filter((ele, index) => index % 2 === 0)
            .map((ele, index) => (
              <CodeDemo
                display={ele.display}
                description={ele.description}
                key={index}
              >
                {ele.code}
              </CodeDemo>
            ))}
        </Column>
        <Column className={"demo-column"}>
          {demoList
            .filter((ele, index) => index % 2 === 1)
            .map((ele, index) => (
              <CodeDemo
                display={ele.display}
                description={ele.description}
                key={index}
              >
                {ele.code}
              </CodeDemo>
            ))}
        </Column>
        <Apis>
          <h2>Api</h2>
          <ApiTable
            data={[
              {
                name: "className",
                description: "顶层样式 class",
                type: "string",
                default: ""
              },
              {
                name: "defaultStyles",
                description: "顶层默认样式",
                type: "string",
                default: ""
              },
              {
                name: "children",
                description: "内容",
                type: "node",
                default: ""
              },
              {
                name: "navList",
                description: "导航数据内容 配置见下表 ",
                type: "array",
                default: ""
              },
              {
                name: "size",
                description: "可选值'small' 导航尺寸配置",
                type: "string",
                default: ""
              },
              {
                name: "onChange",
                description:
                  "选中项改变事件, params: `(itemData.id, itemData)` //(选中项的 id, 选中项的所有信息)",
                type: "func",
                default: ""
              },
              {
                name: "activeId",
                description: "选中项",
                type: "string",
                default: ""
              },
              {
                name: "defaultActiveId",
                description: "默认选中项",
                type: "string",
                default: ""
              },
              {
                name: "noScroll",
                description:
                  "是否阻止滚动条渲染, 当确认不会产生滚动条时可以增加该属性优化性能",
                type: "bool",
                default: ""
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>navList Api</h2>
          <ApiTable
            data={[
              {
                name: "content",
                description: "内容"
              },
              {
                name: "id",
                description: "唯一标识",
                type: "string",
                default: ""
              },
              {
                name: "subList",
                description: "下拉列表内容 配置同`navList`",
                type: "array",
                default: ""
              },
              {
                name: "subViewType",
                description:
                  "下拉弹出类型 可选项: 'pop'（弹出式下拉） 默认为直接下拉 ",
                type: "string",
                default: ""
              },
              {
                name: "isOpen",
                description: "是否打开此弹出菜单",
                type: "bool",
                default: ""
              },
              {
                name: "defaultIsOpen",
                description: "是否默认打开此弹出菜单",
                type: "bool",
                default: ""
              },
              {
                name: "to",
                description: "点击跳转的路由",
                type: "string",
                default: ""
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Class Api</h2>
          <ApiTable
            columns={[
              {
                title: "className",
                render: (dataItem, index, colKey) => dataItem.name,
                id: 0
              },
              {
                title: "描述",
                render: (dataItem, index, colKey) => dataItem.description,
                id: 1
              }
            ]}
            data={[
              {
                name: "wj-nav-wrap",
                description: "最外层"
              },
              {
                name:
                  "wj-nav-item[(.wj-nav-item__{number}),(.active), (.childActive)]",
                description:
                  "导航项[(第{number}级导航项),(当前选中项),(当前选中项在子项内)]"
              },
              {
                name:
                  "wj-nav-item-content[(.wj-nav-item-content__active),(.hasSubList)]",
                description: "导航项内容[(当前选中项), (拥有子项)]"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Nav;
