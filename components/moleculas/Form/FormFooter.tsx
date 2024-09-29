import { Button } from 'antd'

export function FormFooter() {
  return (
    <div className="flex flex-1 gap-2.5">
      <Button type="default" htmlType="button">
        Cancelar
      </Button>

      <Button type="primary" htmlType="submit">
        Salvar
      </Button>
    </div>
  )
}
