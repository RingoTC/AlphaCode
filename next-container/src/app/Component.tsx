/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xVaHHntnrbo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-sm rounded-lg border shadow-lg overflow-hidden">
      <div className="flex gap-2 p-6">
        <img
          alt="Avatar"
          className="rounded-full"
          height="40"
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
        <div className="grid gap-1">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <span className="text-sm font-medium leading-none">ChatGPT</span>
          </div>
          <div className="rounded-xl p-4 bg-gray-100 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sure! I can help with that. What would you like to do today?
            </p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="flex items-center p-2 gap-2">
          <Button size="sm">Settings</Button>
          <Button size="sm" variant="outline">
            Help
          </Button>
          <Button size="sm" variant="outline">
            Feedback
          </Button>
          <Button size="sm" variant="outline">
            Exit
          </Button>
        </div>
      </div>
    </div>
  )
}

