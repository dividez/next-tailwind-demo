export type CMSClient = {
  getPosts: () => Promise<unknown[]>;
};

export function createCMSClient(): CMSClient {
  return {
    async getPosts() {
      throw new Error('CMS 集成尚未配置');
    }
  };
}
