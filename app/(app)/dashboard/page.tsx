import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"

import data from "./data.json"

export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-col m-5 gap-4">
        <SectionCards />
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </div>
  )
}
