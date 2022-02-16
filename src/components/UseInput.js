import React, { useState } from 'react';
// initialValue = 초기값, validator = 검증 함수(boolean 반환하는 함수 지정);
const UseInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === 'function') {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange };
}
