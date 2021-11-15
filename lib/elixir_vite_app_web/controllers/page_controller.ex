defmodule ElixirViteAppWeb.PageController do
  use ElixirViteAppWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
