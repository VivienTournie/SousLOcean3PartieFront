/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package angular.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Vivie
 */
@Controller
@CrossOrigin(origins = "http://localhost:8082")
public class MainController {
    
    @RequestMapping("/")
    public String page() {
        return "index";
    }
    
}