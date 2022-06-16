import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {


  public deleteData(id: number): Promise<any> {
    return fetch(`http://168.194.207.98:8081/api_provincia/delete_provincia.php?id=${id}`, { method: "DELETE" })
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }
        return resp.statusText
      })
  }

  public getData(): Promise<any[]> {
    return fetch('http://localhost:8080/instrumento/getAll')
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }
        return resp.json()
      })
  }

  public getDataByID(id: number): Promise<any[]> {
    return fetch(`http://localhost:8080/instrumento/${id}`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }
        console.log("Respo.", resp);
        return resp.json();
      })
  }


  public postData(form: any): Promise<any>{
    console.log("Qué ID??", form.id)
    if (form.id) {
      return fetch('http://localhost:8080/instrumento', {
        method: "PUT",
        body: JSON.stringify(form),
      })
        .then(resp => {
          console.log(resp)
        })
    } return fetch('http://localhost:8080/instrumento', {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then(resp => {
        console.log(resp)
      })
  }



}
