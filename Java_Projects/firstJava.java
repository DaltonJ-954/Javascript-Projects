import java.util.Scanner;

public class firstJava {
    public static void main(String[] args) {
        System.out.println("Hello WOrld!");

        Scanner scan = new Scanner(System.in);
        System.out.println("Please enter your name: ");
        String name = scan.nextLine();
        System.out.println("Hello " + name);
        scan.close();
    }
}