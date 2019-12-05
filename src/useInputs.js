// useInputs 커스텀 Hook

import { useState, useCallback } from "react";

function useInputs(initialForm) {
  // 커스텀 훅 함수를 만들때는 use뒤에 사용할기능을 넣는 식으로 이름을 짓는다
  //initialForm 이라는 파라미터 사용 - 해당 inputform에서 관리할 초기값
  const [form, setForm] = useState(initialForm);
  //form을 관리하는데 form 의 초기값은 파라미터로 가져오 initialForm이다
  const onChange = useCallback(e => {
    // 이벤트객체를 가져옴
    const { name, value } = e.target;
    //name과 value를 e.target에서 가져옴
    setForm(form => ({
      // form을 업데이트하겠다
      ...form,
      [name]: value
    }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  //form을 초기화시키는 역할
  return [form, onChange, reset];
  //밖으로 내보내기
}

export default useInputs;
