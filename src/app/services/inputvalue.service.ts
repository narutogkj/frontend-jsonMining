import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InputvalueService {
  private value: any = {
    Eating: "65",
    Drinking: "59",
    Sleeping: "90",
    Designing: "81",
    Coding: "56",
    Cycling: "55",
    Running: "40",
  };
  //["65", "59", "90", "81", "56", "55", "40"];
  //this type of values not work properly with statistics

  constructor() {}
  public setValue(v: any) {
    this.value = v;
  }
  public getValue() {
    return this.value;
  }

  public getLabel(json) {
    if (Array.isArray(json) && typeof json === "object") {
      const label = Object.keys(json[0]);
      return label;
    } else {
      const label = Object.keys(json);
      return label;
    }
  }

  // public isMultiDArray(json) {
  //   if (json[0] === undefined) {
  //     return false;
  //   } else {
  //     return json[0].constructor === Array;
  //   }
  // }

  public isJsonArray(json): boolean {
    if (Array.isArray(json)) {
      return true;
    } else {
      return false;
    }
  }
  public getData(json) {
    if (Array.isArray(json) && typeof json === "object") {
      const data = [];
      const lenOfKeys = Object.keys(json[0]).length;
      if (lenOfKeys === 0) {
        // for [1,2,4,]
        data.push(json);
        return data;
      } else {
        // for [{},,,,]
        for (let i = 0; i < json.length; i++) {
          data.push(Object.values(json[i]));
        }

        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].length; j++) {
            if (Array.isArray(data[i][j]) && typeof data[i][j] === "object") {
              const le = data[i][j].length;
              data[i][j] = "Array(" + le + ")";
            } else if (
              typeof data[i][j] === "object" &&
              !Array.isArray(data[i][j])
            ) {
              const le = Object.keys(data[i][j]).length;
              data[i][j] = "Object{" + le + "}";
            }
          }
        }
        return data;
      }
    } else {
      const data = [];
      let ar = [];
      ar = Object.values(json);
      for (let i = 0; i < ar.length; i++) {
        if (Array.isArray(ar[i]) && typeof ar[i] === "object") {
          const le = ar[i].length;
          data.push(`Array(` + le + `)`);
        } else if (!Array.isArray(ar[i]) && typeof ar[i] === "object") {
          const le = Object.keys(ar[i]).length;
          data.push(`Object{${le}}`);
        } else {
          data.push(ar[i]);
        }
      }
      return data;
    }
  }
}
