import { makeAutoObservable } from "mobx";
import { HeadCount, Mode, Topic } from "../constants";

class RootStore {
  headCount: HeadCount = 3; // 인원
  mode: Mode = "normal"; // 모드
  topic: Topic = "animalPlant"; // 주제

  word: string = ""; // 시민 제시어
  liarWord: string = ""; // 라이어 제시어 (바보모드)
  liar: number = 0; // 라이어 순서
  spy: number = 0; // 스파이 순서 (스파이 모드)

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
