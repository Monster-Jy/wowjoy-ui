import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProgressBase = styled.div`
    display:inline-block;
    width:100%;
    margin-right: ${p=>p.showInfo?'calc(-2em - 8px)':'0px'};
    padding-right: ${p=>p.showInfo?'calc(2em + 8px)':'0px'};
    .inner{
        position: relative;
        display:inline-block;
        width:100%;
        vertical-align:middle;
        background-color:#f5f5f5;
        border-radius:100px;
    }
    .bg{
        width: ${p=>p.percent+'%'};
        height:8px;
        border-radius:100px;
        position: relative;
        background-color:${p=>p.strokeColor};
        transition:all .4s cubic-bezier(.08, .82, .17, 1) 0s;
    }
`;
const Span = styled.span`
    display:${p=>p.showInfo?'inline-block':'none'};
    width:2em;
    margin-left:8px;
    color:rgba(0,0,0,0.45);
    font-size:1em;
    line-height:1;
    white-space:nowrap;
    text-align:left;
    vertical-align:middle;
    word-break:normal;
`;

class Progress extends PureComponent{
    static defaultProps = {
        percent:0,
        strokeColor:'#06aea6',
        showInfo:true
    }
    render(){
        const {className,defaultStyles,children,percent,strokeColor,showInfo} = this.props;
        return(
            <div>
                <ProgressBase
                defaultStyles={defaultStyles}
                className={className}
                percent={percent}
                strokeColor={strokeColor}
                showInfo={showInfo}
                >
                    <div className='inner'>
                        <div className='bg'></div>
                    </div>
                </ProgressBase>
                <Span showInfo={showInfo}>{percent}%</Span>
            </div>
        )
    }
}

Progress.propTypes = {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node,
    percent:PropTypes.number,
    strokeColor:PropTypes.string,
    showInfo:PropTypes.bool
};

export default Progress;