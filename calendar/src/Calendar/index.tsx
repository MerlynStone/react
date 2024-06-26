import dayjs, {Dayjs} from 'dayjs'
import './index.scss'
import MonthCalendar from './MonthCalendar'
import Header from './Header'
import { CSSProperties, ReactNode, useState } from 'react'
import cs from 'classnames'
import LocaleContext from './LocaleContext'

export interface  CalendarProps{
    value:Dayjs;
    style?:CSSProperties;
    className?:string | string [];
    // 定制日期显示 会完全覆盖日期单元格
    dateRender?:(currentDate:Dayjs)=> ReactNode;
    // 定制日期单元格 内容会被添加到单元格内 只有在全屏日历的模式下生效
    dateInnerContent?:(currentDate:Dayjs)=>ReactNode;
    // 国际化相关
    locale?:string;
    onChange?:(date:Dayjs) => void
}
function Calendar(props:CalendarProps) {
    const {
        value,
        style,
        className,
        dateRender,
        dateInnerContent,
        locale,
        onChange
    } = props;

    const [curValue,setCurValue] = useState<Dayjs>(value)
    
    const [curMonth,setCurMonth] = useState<Dayjs>(value)

    const classNames = cs("calendar",className)
    function selectHandle(date:Dayjs) {
        changeDate(date)
    }
    function prevMonthHandler() {
        setCurMonth(curMonth.subtract(1,'month'))
    }
    function nextMonthHandler() {
        setCurMonth(curMonth.add(1,'month'))
    }
    function todayHandler() {
        const date = dayjs(Date.now())
        
        changeDate(date)
    }
    function changeDate(date: Dayjs) {
        setCurValue(date);
        setCurMonth(date);
        onChange?.(date);
    }
    
    return(<LocaleContext.Provider value={{locale:locale || navigator.language}} >
        <div className={classNames} style={style}>
            <Header curMonth={curMonth} prevMonthHandler={prevMonthHandler} nextMonthHandler={nextMonthHandler} todayHandler={todayHandler}/>
            <MonthCalendar {...props} value={curValue} curMonth={curMonth} selectHandler={selectHandle} />
        </div>
    </LocaleContext.Provider>)
}
export default Calendar