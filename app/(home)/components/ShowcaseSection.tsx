'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import Link from 'next/link'

const codeSnippet = `import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function NotificationsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardAction>
          <Switch defaultChecked />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-sm">
            <p className="font-medium">John Doe</p>
            <p className="text-default-11">Your report is ready</p>
          </div>
          <Badge variant="primary">New</Badge>
        </div>

        <ToggleGroup type="single" defaultValue="all">
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="read">Read</ToggleGroupItem>
          <ToggleGroupItem value="unread">Unread</ToggleGroupItem>
        </ToggleGroup>

        <Button>View report</Button>
      </CardContent>
    </Card>
  )
}`

export default function ShowcaseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      {/* Section header */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--orange-11)]">
          Components
        </p>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--gray-12)] sm:text-4xl">
          Every component works together.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-[var(--gray-11)]">
          No mismatched heights. No off-by-one spacings. Solar UI components are
          designed as a system, not a collection.
        </p>
      </div>

      {/* Tabs: preview + code */}
      <div className="mx-auto max-w-2xl">
        <Tabs defaultValue="preview">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <Badge variant="outline" className="border-[var(--gray-6)] text-[var(--gray-11)] text-xs">
              Notifications
            </Badge>
          </div>

          {/* Preview tab */}
          <TabsContent value="preview">
            <div className="mt-3 flex min-h-64 items-center justify-center rounded-xl border border-[var(--gray-6)] bg-[var(--gray-2)] p-8">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Notifications</span>
                    <Switch defaultChecked />
                  </CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="flex flex-col gap-4 pt-4">
                  {/* Notification item */}
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-[var(--gray-12)]">John Doe</p>
                      <p className="text-[var(--gray-11)]">Your report is ready to view</p>
                    </div>
                    <Badge variant="primary" className="shrink-0">
                      New
                    </Badge>
                  </div>

                  <Separator />

                  {/* Filter toggle */}
                  <ToggleGroup type="single" defaultValue="all" variant="outline">
                    <ToggleGroupItem value="all">All</ToggleGroupItem>
                    <ToggleGroupItem value="read">Read</ToggleGroupItem>
                    <ToggleGroupItem value="unread">Unread</ToggleGroupItem>
                  </ToggleGroup>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1">View report</Button>
                    <Button variant="ghost">Dismiss</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Code tab */}
          <TabsContent value="code">
            <div className="mt-3 overflow-hidden rounded-xl border border-[var(--gray-6)] bg-[var(--gray-2)]">
              <div className="flex items-center justify-between border-b border-[var(--gray-6)] px-4 py-2">
                <span className="text-xs text-[var(--gray-11)]">NotificationsCard.tsx</span>
                <Badge variant="secondary" className="text-xs">
                  JSX
                </Badge>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-[var(--gray-11)]">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Link to docs */}
      <div className="mt-10 text-center">
        <Button variant="secondary" asChild>
          <Link href="/docs">
            Browse all 68 components →
          </Link>
        </Button>
      </div>
    </section>
  )
}
