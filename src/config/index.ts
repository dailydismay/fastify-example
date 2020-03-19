export interface IConfig {
  port: number;
}

export const config: IConfig = {
  port: +process.env.PORT || 3000,
};
