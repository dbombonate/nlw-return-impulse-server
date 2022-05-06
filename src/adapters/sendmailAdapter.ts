export interface SendmailAdapterSubmit {
  subject: string;
  body: string;
}

export interface SendmailAdapter {
  sendmail: (data: SendmailAdapterSubmit) => Promise<void>;
}
