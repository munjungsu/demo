/** 
 * @filename : regex_helper.js
 * @author : 문정수(mjcah2013@gmail.com)
 * @descripton : 정규표현식 검사 수행 후, true/false로 해당 정규표현식 충족하는지 여부를 반환히는 함수들의 모음
*/
class RegexHelper {
    //constructor(){}
    /** 
     * 값의 존재 여부를 검사한다.
     * @param {string} selector 입력요소에 해당하는 CSS선택자
     * @param {string} msg 값이 없을 경우 표시할 메세지 내용
     * @return {boolean} 입력된 경우 true /입력되지 않은 경우 false
    */
   value(selector, msg) {
        //앞 뒤의 공백을 제외하고 내용만 추출
        const field = document.querySelector(selector);
        const content = field.value.trim();

        if(!content){
            alert(msg);
            field.focus();
            return false;
        }
        return true;
   }


   max_length(selector, len, msg){
        const field = document.querySelector(selector);
        const content = field.value.trim();
        if(content.length > len){
            alert(msg);
            field.value = '';
            field.focus();
            return false;
        }
        return true;
   }


   min_length(selector, len, msg){
        const field = document.querySelector(selector);
        const content = field.value.trim();
        if(content.length < len){
            alert(msg);
            field.value = '';
            field.focus();
            return false;
        }
        return true;
    }

   check(selector, msg){
        const field = document.querySelectorAll(selector);
        let checked = false;

        Array.from(field).some((v, i)=>{
            if(v.checked){
                checked = true;
                return true;
            }
        });
        //반복이 끝까지 수행되면 체크된 항목이 없다는 의미이므로 false 리턴
        if(!checked){
            alert(msg);
            fiedl[0].focus();
        }
        return checked;
   }

   check_min(selector, min, msg){
        let count = 0;
        const field = document.querySelectorAll(selector);

        field.forEach((v, i)=>{
            if(v.checked){
                count++;
            }
        });
        if(count < min){
            alert(msg);
            field[0].focus();
            return false;
        }
        return true;
   }


   check_max(selector, max, msg){
        let count = 0;
        const field = document.querySelectorAll(selector);

        field.forEach((v, i)=>{
            if(v.checked){
                count++;
            }
        });
        if(count > max){
            alert(msg);
            field[0].focus();
            return false;
        }
        return true;
   }


   compare_to(origin_selector, compare_selector, msg){
        const origin = document.querySelector(origin_selector);
        const compare = document.querySelector(compare_selector);
        var src = origin.value.trim();
        var dsc = compare.value.trim();

        if(src!=dsc){
            alert(msg);
            origin.value = '';
            compare.value = '';
            origin.focus();
            return false;
        }
        return true;
   }


   field(selector, msg, regex_expr){
        const field = document.querySelector(selector);
        var src = field.value.trim();

        //입력값이 없거나 입력값에 대한 정규표현식 검사가 실패라면?
        if(!src || !regex_expr.test(src)){
            alert(msg);
            field.value = '';
            field.focus();
            return false;
        }
        return true;
   }


   num(selector, msg){
        return this.field(selector, msg, /^[0-9]*$/);
   }



   eng(selector, msg){
        return this.field(selector, msg, /^[a-zA-Z]*$/);
   }

   kor(selector, msg){
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);

   }

   eng_num(selector, msg){
        return this.field(selector, msg, /^[a-zA-Z0-9]*$/);
   }

   kor_num(selector, msg){
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
   }

   email(selector, msg){
        return this.field(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
   }
   cellphone(selector, msg){

   }

   telphone(selector, msg){
        return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
   }

   phone(selector, msg){
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/;

        const field = document.querySelector(selector);
        var src = field.value.trim();

        if(!src || (!check1.test(src) && !check2.test(src))){
            alert(msg);
            field.value = '';
            field.focus();
            return false;
        }
        return true;
   }
}