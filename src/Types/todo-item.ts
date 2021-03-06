import { string } from "prop-types";

export interface TodoItem {
        id: string
        description: string
        title: string
        isActive: boolean
        dateCreated: Date
        priority: number
}

