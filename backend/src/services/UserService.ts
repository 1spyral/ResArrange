import { Types } from "mongoose"
import { UserDocument, UserModel } from "@/models/User"

export class UserService {
    static async getUser(id: string): Promise<UserDocument | null> {
        const userId = new Types.ObjectId(id)

        return UserModel.findById(userId)
    }

    static async createUser(
        userData: Partial<UserDocument>
    ): Promise<UserDocument> {
        const user = new UserModel(userData)

        return user.save()
    }

    static async updateUser(
        id: string,
        updateData: Partial<UserDocument>
    ): Promise<UserDocument | null> {
        const userId = new Types.ObjectId(id)

        return UserModel.findByIdAndUpdate(userId, updateData, { new: true })
    }
}
