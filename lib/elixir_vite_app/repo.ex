defmodule ElixirViteApp.Repo do
  use Ecto.Repo,
    otp_app: :elixir_vite_app,
    adapter: Ecto.Adapters.Postgres
end
