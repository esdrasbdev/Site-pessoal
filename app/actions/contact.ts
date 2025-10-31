"use server"

export async function submitContactForm(data: { name: string; email: string; message: string }) {
  try {
    // Log the contact form submission
    console.log("📧 Nova mensagem de contato recebida:")
    console.log("Nome:", data.name)
    console.log("Email:", data.email)
    console.log("Mensagem:", data.message)
    console.log("Data:", new Date().toLocaleString("pt-BR"))
    console.log("---")

    // Here you can add email service integration later
    // For example: Resend, SendGrid, Nodemailer, etc.

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Erro ao processar formulário:", error)
    return { success: false, error: "Erro ao enviar mensagem" }
  }
}
