export interface Project {
    title : string; // 프로젝트 제목
    period : string; // 프로젝트 기간
    role : string; // 맡은 업무
    technology : string[]; // 사용한 기술
}

export interface UserProfile {
    username: string;   // 유저 이름
    jobObjective: string;
    topics: Project[];  // 진행한 프로젝트들
    profileImage: string;  // 프로필 이미지
    summary: string;  // 한줄 소개
}
