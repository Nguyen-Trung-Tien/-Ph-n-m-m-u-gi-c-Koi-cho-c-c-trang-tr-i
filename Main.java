import java.util.ArrayList;

public class Main {
    public static void virtualViaPointer(Employee employee) {
        employee.print();
        System.out.printf("\nearned: %.2f\n\n", employee.earnings());
    }

    public static void virtualViaReference(Employee employee) {
        employee.print();
        System.out.printf("\nearned: %.2f\n\n", employee.earnings());
    }

    public static void main(String[] args) {
        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new SalariedEmployee("John", "Smith", "111-11-1111", 800.00));
        employees.add(new CommissionEmployee("Sue", "Jones", "333-33-3333", 10000, 0.06));
        employees.add(new BasePlusCommissionEmployee("Bob", "Lewis", "444-44-4444", 5000, 0.04, 300));

        System.out.println("Employees processed polymorphically via dynamic binding:\n");

        for (Employee employee : employees) {
            virtualViaPointer(employee);
        }

        for (Employee employee : employees) {
            virtualViaReference(employee);
        }
    }
}
