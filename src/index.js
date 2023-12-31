import "#Config/env.js"
import connectDB from "#Config/db.js"
import httpServer from "#Config/http.js"

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL)

    httpServer.listen(process.env.PORT, () => {
        console.log(`Listening server on port ${process.env.PORT}`);
    })
}

bootstrap()
