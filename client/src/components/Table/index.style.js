import Styled from "styled-components"
export const Table = Styled.table`
width : 100%;
padding : 0 10px;
`

export const TableHead = Styled.thead``

export const TableBody = Styled.tbody``

export const TableRow = Styled.tr``

export const TableHeader = Styled.th`
padding : 40px 0 !important;
word-wrap: break-word; 
overflow-wrap: break-word;
font-family: "Proxima Nova";
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: #2f2d40;
`

export const TableData = Styled.td`
text-align : center;
font-family: "Proxima Nova";
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: #6d6c79;
`

export const Styles = Styled.div`
/* This is required to make the table full-width */
display: block;
  max-width: 100%;

  /* This will make the table scrollable when it gets too small */
.tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  table {
    width: 100%;
    border-spacing: 0;
    

    th {
      border-bottom : 1px solid #af9efd;
      vertical-align: initial;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(219, 221, 227, 0.5);
      /* border-right: 1px solid black; */

       /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
 /* But "collapsed" cells should be as small as possible */
 &.collapse {
        width: 0.0000000001%;
      }


      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

export const Pagination = Styled.div`
 display :flex;
 margin : 24px 0;  
 justify-content: flex-end;
`

export const PaginationIndex = Styled.div`
display: flex;
font-family: "Proxima Nova";
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.85;
letter-spacing: normal;
color: #9796a0;`

export const PagincationButtonContainer = Styled.div`
 display: flex;
 min-width: 130px;
 align-items: center;
 justify-content: space-around;
 margin: 0 40px 0 16px;
`

export const PaginationButton = Styled.div`
    width: 100%;
    cursor: pointer;
    display : flex;
    max-width : 30px;
height: 18px;
font-family: "Proxima Nova";
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.29;
letter-spacing: normal;
color: #000;
`

export const RightIconSpan = Styled.span`
 margin-left : 12px;
`

export const LeftIconSpan = Styled.span`
  margin-right : 12px;
`

export const BackButtonIcon = Styled.i`
border: solid 0.5px #000;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
`

export const NextButtonIcon = Styled.i`
border: solid 0.5px #000;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
`
