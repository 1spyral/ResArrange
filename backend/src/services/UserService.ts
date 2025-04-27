import { IUser } from "@/interfaces"
import { UserModel } from "@/models/UserModel"

export class UserService {
    static async getUser(id: number): Promise<IUser | null> {
        try {
            const result = await UserModel.first({ id })

            console.log(result)

            return result.properties
        } catch (error) {
            console.error(`Error fetching user with ID ${id}:`, error)
            return null
        }
    }

    // static async createUser(
    //     userData: Partial<UserDocument>
    // ): Promise<UserDocument> {
    //     const user = new UserModel(userData)
    //
    //     return user.save()
    // }
    //
    // static async updateUser(
    //     id: string,
    //     updateData: Partial<UserDocument>
    // ): Promise<UserDocument | null> {
    //     const userId = new Types.ObjectId(id)
    //
    //     return UserModel.findByIdAndUpdate(userId, updateData, { new: true })
    // }
}
