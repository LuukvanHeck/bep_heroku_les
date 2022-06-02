export class KoffieService {
    MAX_KOFFIE_STERKTE = 10;

    getKoffieSoorten() {
        return fetch('https://bep2022les.herokuapp.com/')
            .then(r => {
                if(r.status === 200){
                    return r.json();
                }else{
                    return Promise.resolve([]);
                }
            }).catch(()=>{
                return Promise.resolve([])
            })
    }

    voegKoffieToe(koffie){
        return fetch('https://bep2022les.herokuapp.com/', {
            method: 'POST',
            body: JSON.stringify(koffie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
