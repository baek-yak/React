import React, { useCallback } from 'react'
import { List } from 'react-virtualized'
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index]
            return(
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            )
        },
        [onRemove, onToggle, todos],
    )

    return (
        <List
            className='TodoList'
            // 전체 크기
            width={512}
            // 전체 높이
            height={513}
            // 항목 개수
            rowCount={todos.length}
            // 항목 높이
            rowHeight={57}
            // 항목을 렌더링할 때 쓰는 함수
            rowRenderer={rowRenderer}
            // 배열
            list={todos}
            // list에 기본 적용되는 outline 스타일 제거
            style={{outline:'none'}}
        />
    );
};

export default React.memo(TodoList);