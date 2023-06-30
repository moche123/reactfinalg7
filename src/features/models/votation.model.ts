/* eslint-disable prettier/prettier */


export interface ISkill{
    id: number;
    tool: string;
    language: string;
    experience: string;
    icon: string;
}


export interface ISkillVotation {
    id: number;
    value: string;
    count: number;
}

export interface IState {
    status: string;
    skills: ISkillVotation[];
} 

export interface IAction{
    payload: any;
    type: any;
}