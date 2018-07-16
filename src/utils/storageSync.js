import { default_API_url, get_All_Part_url } from '../config/index';
import { PART_KEY } from './storageKey';

const storageSync = {
    // sync方法的名字必须和所存数据的key完全相同
    // 方法接受的参数为一整个object，所有参数从object中解构取出
    // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
    part(params) {
        let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;

        fetch(default_API_url + get_All_Part_url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': extraFetchOptions.token
            },
            ...extraFetchOptions,
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log('part sync', json);
            if (json && json.results) {
                storage.save({
                    key: PART_KEY,
                    id,
                    data: json.results
                });

                if (someFlag) {
                    // 根据syncParams中的额外参数做对应处理
                }

                // 成功则调用resolve
                resolve && resolve(json.results);
            }
            else {
                // 失败则调用reject
                reject && reject(new Error('data parse error'));
            }
        }).catch(err => {
            console.warn(err);
            reject && reject(err);
        });
    },
}

export default storageSync;