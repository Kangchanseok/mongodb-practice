// 내장 객체
/*
console
process
exports
*/

// process 객체
console.log(process.version, process.platform, process.arch);
console.log(process.versions); // 종속된 프로그램의 버전들
console.log(process.env); // 환경정보

// global 변수
console.log(__dirname); // 현재 모듈의 디렉터리
console.log(__filename);// 현재 모듈의 파일명
