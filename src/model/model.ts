export interface IUser {
    docRef: string;
    uid: string;
    token?: string;
    name: string;
    email: string;
    isAdmin: boolean;
    isMentor: boolean;
    occupation: string;
    photo: string;
    linkedinURI: string;
    githubURI: string;
}

export interface ISkill {
    docRef: string;
    name: string;
}

export type CreateSkillDto = Omit<ISkill,"docRef">;

export interface IUserSkill {
    docRef: string;
    skillId: string;
    userId: string;
    mentorable: boolean;
}

export interface IUpdateUserDto {
    name: string;
    occupation: string;
    isMentor: boolean;
    photo: string;
    linkedinURI: string;
    githubURI: string;
}

export interface IReadUserDto extends IUser {
    skills: ISkill[]
}