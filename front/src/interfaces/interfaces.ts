export interface MessageInterface {
    authorID: string,
    message: string
}


export interface ChatLineInterface {
    chatID:string,
    chatWith: string,
    messages: MessageInterface[],
}